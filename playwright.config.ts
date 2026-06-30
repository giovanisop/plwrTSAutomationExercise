import { defineConfig, devices } from '@playwright/test';
//import dotenv from 'dotenv';

//dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 10*1000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',
  
  use: {

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    browserName: 'chromium',
    screenshot: 'on',
    headless: true,
  },

});
