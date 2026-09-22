import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
     workers: 4,

  fullyParallel: true,

    use: {
        baseURL: 'https://shop.sysco.com',
        headless: false,
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
});