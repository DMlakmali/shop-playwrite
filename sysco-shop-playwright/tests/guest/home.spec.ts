import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Sysco Shop - Home Page', () => {

    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.open();
    });

    test('should load the Sysco Shop home page', async ({ page }) => {
        await expect(page).toHaveTitle(/Sysco/i);
    });

    test('should allow user to login as a guest', async () => {
        await homePage.clickOnContinueAsGuest();
        await homePage.enterZipCode('02108');
        await homePage.clickOnStartShoppingButton();
        await expect(homePage.page).toHaveURL(/discover/i);
    });

});