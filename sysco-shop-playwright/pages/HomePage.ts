import { Page, Locator } from '@playwright/test';

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

    async searchProduct(productName: string): Promise<void> {
        await this.searchBox.fill(productName);
        await this.searchBox.press('Enter');
    }
}
