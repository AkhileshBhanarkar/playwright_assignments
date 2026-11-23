const {test,expect} = require('@playwright/test');

test('Login Test', async ({page}) => {

    const email = 'akhilesh@gmail.com';
    const password = 'Akhil84465@';
    await page.goto('https://eventhub.rahulshettyacademy.com');
    await expect (page.locator('h1')).toHaveText('Sign in to EventHub');
    const emailText = await page.getByLabel('Email').getAttribute('placeholder');
    await (expect (emailText)).toBe('you@email.com');
    await expect (page.getByRole('button', { name: 'Sign In' })).toBeVisible();


    await page.getByLabel('Email').fill(email);
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect (page.locator('#user-email-display')).toHaveText(email);

});

test('Login page smoke check', async ({page}) => {

   
    await page.goto('https://eventhub.rahulshettyacademy.com');
    await expect (page.locator('h1')).toHaveText('Sign in to EventHub');
    const currentURL = page.url();
    await expect (currentURL).toContain('/login');
    await expect (page.getByLabel('Password')).toBeVisible();
    await expect (page.locator('h1')).toBeVisible();

});