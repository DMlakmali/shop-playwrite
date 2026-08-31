import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Sysco Shop - Home Page', () => {

    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.open();
    });

    test('should load the Sysco Shop home page', async ({ page }) => {
        await expect(page).toHaveTitle(/Sysco/i);
    });

    test('should allow user to search for a product', async () => {
        await homePage.searchProduct('chicken');
    });

});