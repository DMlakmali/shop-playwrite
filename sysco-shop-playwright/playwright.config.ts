/// <reference types="node" />

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    fullyParallel: true,

    workers: process.env.CI ? 4 : undefined,

    retries: process.env.CI ? 2 : 0,

    reporter: [
        ['html', { open: 'never' }],
        ['junit', { outputFile: 'test-results/results.xml' }]
    ],

    use: {
        baseURL: process.env.BASE_URL || 'https://shop.sysco.com',

        headless: process.env.CI ? true : false,

        trace: 'on-first-retry',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure'
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