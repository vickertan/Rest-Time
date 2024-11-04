import { test, expect } from "@playwright/test";

test("App's core feature works correctly on Mobile Chrome and Safari", async ({
    page,
    context,
}) => {
    await page.goto("http://localhost:4173/");
    await expect(page).toHaveTitle("Rest Time");

    // Set context to offline mode
    await context.setOffline(true);

    // Simulate offline behaviour
    await page.getByRole("button").nth(0).click();
    await page.locator('input[id="in-time"]').fill("17:00");
    await page.locator('button[class="rec-button"]').click();
    const isRec1Visible = await page.locator('div[id="0"]').isVisible();
    expect(isRec1Visible).toBe(true);

    // Set context back to online mode
    await context.setOffline(false);

    // Simulate offline behaviour again in online mode
    await page.getByRole("button").nth(0).click();
    await page.locator('input[id="in-time"]').fill("17:00");
    await page.locator('button[class="rec-button"]').click();
    const isRec2Visible = await page.locator('div[id="1"]').isVisible();
    expect(isRec2Visible).toBe(true);
});
