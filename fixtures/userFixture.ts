import { test as base } from '@playwright/test';
import UserAPI from "../api-utils/UserAPI";
import {deleteSamplePdf, createSamplePdf} from "../test-data/pdfFactory";

// Ad domains that serve the Google Vignette full-page interstitial on
// automationexercise.com. The ad can hijack a click and append
// '#google_vignette' to the URL without navigating, which is flaky in CI
// (cloud IPs get served the interstitial far more often than a home
// connection). Blocking these requests keeps the ad from ever loading.
const AD_HOST_PATTERNS = [
    /googlesyndication\.com/,
    /doubleclick\.net/,
    /googleadservices\.com/,
    /adservice\.google\.com/,
    /google\.com\/pagead/,
];

export const test = base.extend<{
        userAPI: UserAPI,
        samplePdf: string
}> ({

    page: async ({ page }, use) => {
        await page.route('**/*', (route) => {
            const url = route.request().url();
            if (AD_HOST_PATTERNS.some((pattern) => pattern.test(url))) {
                return route.abort();
            }
            return route.continue();
        });
        await use(page);
    },

    //creation of user fixture to be called only when needed
    userAPI: async ({}, use) => {
        const api = new UserAPI();
        await api.setNewUser();

        await use(api);
        
        await api.deleteUser(api.user);
    },

    //creation of pdf fixture to be called only when needed
    samplePdf: async ({}, use) => {
        const pdf = await createSamplePdf();
        await use(pdf);
        await deleteSamplePdf(pdf);
    }
});

