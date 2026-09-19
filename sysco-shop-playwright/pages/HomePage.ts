import { Page, Locator } from '@playwright/test';
import { test, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.getByRole('textbox', { name: /search/i });
    }

    async open(): Promise<void> {
        await this.page.goto('/');
    }

    async clickOnContinueAsGuest():Promise<void> {
        await this.page.click('[data-id="btn_login_continue_as_guest"]');
    }

    async enterZipCode(zipCode: string): Promise<void> {
        await this.page.locator('[data-id="initial_zipcode_modal_input"]').fill(zipCode);
        
    }

    async clickOnStartShoppingButton(): Promise<void> {
        await this.page.click('text=Start Shopping');
    }

    async searchProduct(productName: string): Promise<void> {
        await this.searchBox.fill(productName);
        await this.searchBox.press('Enter');
    }

   
}
