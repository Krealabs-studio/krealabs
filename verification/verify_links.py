from playwright.sync_api import sync_playwright

def verify_external_links():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the home page (assuming Contact component is rendered there)
        page.goto("http://localhost:3000")

        # Wait for the Contact section to load
        # Using a more robust selector that doesn't trigger regex issues
        page.wait_for_selector("text=Visual experiments stream")

        # Take a screenshot of the Contact section
        # Locate the section containing the text
        contact_section = page.locator("section").filter(has_text="Ready to initiate?")
        contact_section.scroll_into_view_if_needed()
        page.screenshot(path="verification/contact_section.png")

        # Verify social links have the correct attributes
        # Selecting links that likely point to external sites (starting with http)
        # Note: In the component, SOCIALS are rendered.
        # We look for links within the contact section to be sure.
        links = contact_section.locator("a")
        count = links.count()
        print(f"Found {count} links in contact section")

        for i in range(count):
            link = links.nth(i)
            href = link.get_attribute("href")

            if href and href.startswith("http"):
                target = link.get_attribute("target")
                rel = link.get_attribute("rel")
                aria_label = link.get_attribute("aria-label")

                print(f"Link: {href}")
                print(f"  Target: {target}")
                print(f"  Rel: {rel}")
                print(f"  Aria-Label: {aria_label}")

                if target == "_blank":
                    assert rel is not None, f"Missing rel attribute in {href}"
                    assert "noopener" in rel, f"Missing noopener in {href}"
                    assert "noreferrer" in rel, f"Missing noreferrer in {href}"

                if aria_label:
                    print(f"  ✅ Aria-label present: {aria_label}")
                else:
                    # Check if it's the social link which SHOULD have it
                    # The mailto link doesn't have target=_blank so we might not have added aria-label to it in this task,
                    # but my plan was to add it to social links.
                    # Social links are distinguished by being in the list.
                    print(f"  ℹ️ No aria-label (might be intentional if not a social link)")

        browser.close()

if __name__ == "__main__":
    verify_external_links()
