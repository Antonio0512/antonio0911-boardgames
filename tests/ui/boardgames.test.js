const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('https://antonio0911-boardgames-deployment.onrender.com/collection');
    const list = await page.$$('li');
    expect(list).toBeTruthy();
  });
  