from playwright.sync_api import sync_playwright

def verify_partners_link():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the page
        page.goto("http://localhost:3000")

        # Find the partners section
        partners_section = page.get_by_role("heading", name="Fig 5.0 // Strategic Alliances")
        partners_section.scroll_into_view_if_needed()

        # Find the link
        # It's inside a section with text "Kreatif Minds"
        # The link text is "[ Initiate Link ]"

        # Verify the attributes
        link = page.get_by_role("link", name="Visit Kreatif Minds website (opens in new tab)")

        # Check if attributes are correct
        rel_attr = link.get_attribute("rel")
        target_attr = link.get_attribute("target")

        print(f"Rel: {rel_attr}")
        print(f"Target: {target_attr}")

        if rel_attr != "noopener noreferrer":
            raise Exception(f"Expected rel='noopener noreferrer', got '{rel_attr}'")

        if target_attr != "_blank":
            raise Exception(f"Expected target='_blank', got '{target_attr}'")

        # Take screenshot of the partners section
        page.screenshot(path="verification/partners_link.png")

        browser.close()

if __name__ == "__main__":
    verify_partners_link()
