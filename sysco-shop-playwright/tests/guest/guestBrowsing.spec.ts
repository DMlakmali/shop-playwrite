import { test, expect } from '@playwright/test';
import { CataloguePage } from '../../pages/CataloguePage';
import { HomePage } from '../../pages/HomePage';

test.describe('Sysco Shop - Guest Browsing @smoke @regression', () => {


    let cataloguePage: CataloguePage;
    let homePage: HomePage;


 test.beforeEach(async ({ page }) => {
        await page.goto('/');
        cataloguePage = new CataloguePage(page);
        homePage = new HomePage(page);
        await homePage.clickOnContinueAsGuest();
        await homePage.enterZipCode('02120');
        await homePage.clickOnStartShoppingButton();
        await expect(homePage.page).toHaveURL(/discover/i);
    });

    test('should search for a valid product', async ({ page }) => {
        await cataloguePage.enterProductName('apple');
       await cataloguePage.waitForLoaderToDisappear();
        const productsDisplayed = await cataloguePage.areProductsDisplayed();
        expect(productsDisplayed).toBe(true);
    });

});