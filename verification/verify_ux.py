
from playwright.sync_api import sync_playwright
import os

def verify_ux_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local index.html file using absolute path
        cwd = os.getcwd()
        page.goto(f'file://{cwd}/index.html')

        # Test 1: Check focus styles
        # Focus on the 'Enter the Lab' button
        btn = page.get_by_role('button', name='Enter the Lab')
        btn.focus()
        page.screenshot(path='verification/focus_button.png')
        print('Captured button focus state')

        # Test 2: Check scroll focus
        # Click the button which should scroll and focus #about
        btn.click()
        # Wait for scroll animation (approx 1s)
        page.wait_for_timeout(1500)

        # Verify focus is on #about
        focused_element_id = page.evaluate('document.activeElement.id')
        print(f'Active element ID after scroll: {focused_element_id}')

        if focused_element_id == 'about':
            print('SUCCESS: Focus moved to #about section')
        else:
            print(f'FAILURE: Focus is on {focused_element_id}')

        page.screenshot(path='verification/scroll_focus.png')

        # Test 3: Check aria-hidden on cursor
        # Locate the blinking cursor span inside the button
        cursor_span = page.locator('.cursor-blink')
        aria_hidden = cursor_span.get_attribute('aria-hidden')
        print(f'Cursor aria-hidden: {aria_hidden}')

        if aria_hidden == 'true':
            print('SUCCESS: Cursor is hidden from SR')
        else:
            print('FAILURE: Cursor missing aria-hidden')

        browser.close()

if __name__ == '__main__':
    verify_ux_changes()
