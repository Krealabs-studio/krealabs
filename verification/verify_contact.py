from playwright.sync_api import sync_playwright

def verify_contact_form():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the page
        page.goto("http://localhost:3000")

        # Scroll to contact section
        contact_section = page.get_by_role("heading", name="(07) CONTACT")
        contact_section.scroll_into_view_if_needed()

        # Verify initial state
        page.screenshot(path="verification/contact_initial.png")

        # Fill form
        page.get_by_label("Name *").fill("Test User")
        page.get_by_label("Email *").fill("test@example.com")
        page.get_by_label("Message *").fill("This is a test message.")

        page.screenshot(path="verification/contact_filled.png")

        # Submit
        submit_button = page.get_by_role("button", name="Send Message")
        submit_button.click()

        # Verify loading state (might be too fast to catch, but we try)
        # We can't easily catch the loading state in a screenshot without artificial delays in the app or precise timing

        # Verify success state
        # Wait for the success message to appear
        success_message = page.get_by_text("Message Transmitted")
        success_message.wait_for()

        page.screenshot(path="verification/contact_success.png")

        browser.close()

if __name__ == "__main__":
    verify_contact_form()
