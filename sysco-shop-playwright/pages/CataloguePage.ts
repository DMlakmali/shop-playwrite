import { Page, Locator } from '@playwright/test';
import { test, expect } from '@playwright/test';

export class CataloguePage {
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;
        
    }

    async enterProductName(productName: string): Promise<void> {
        await this.page.locator('[data-dd-action-name="Global search"]').fill(productName);
        await this.page.locator('[data-dd-action-name="Global search"]').press('Enter');
    }

    async clickOnSearchButton(): Promise<void> {
        await this.page.locator("xpath=//span[@class=\'input-prefix\']/div[@class=\'icon icon-primary icon-lg\']").click();
    }

 async areProductsDisplayed(): Promise<boolean> {
        return await this.page.locator('[class="row product-image"]').isVisible();
    }

    async waitForLoaderToDisappear(): Promise<void> {
       await expect(this.page.locator('[class="loader loader-md"]')).toBeHidden();
      // await this.page.waitForTimeout(5000);
    }

}

