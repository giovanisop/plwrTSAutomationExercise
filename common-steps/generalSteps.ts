import { test, type Page } from '@playwright/test';
import type HomePage from '../page-objects/HomePage';
import type CommonPage from '../page-objects/CommonPage';
import type { UserData } from '../test-data/userFactory';

// actions

export async function scrollDownToFooter(commonPage: CommonPage) {
    await test.step("When I scroll down page to bottom", async () => {
        await commonPage.scrollDownToFooter();
    });
}

export async function subscribe(commonPage: CommonPage, user : UserData) {
    await test.step("When I enter email address in input and click arrow button", async () => {
        await commonPage.fillTextBox(commonPage.subscriptionImp, user.email);
        await commonPage.clickBtnLnk(commonPage.subscriptionBtn);
    });
}

//assertions

export async function checkSubscriptionView(commonPage: CommonPage) {
    await test.step("Then I verify 'SUBSCRIPTION' is visible", async () => {
        await commonPage.checkInViewport(commonPage.subscriptionTxt);
    });
}

export async function checkHeaderView(homePage: HomePage) {
    await test.step("Then I verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen", async () => {
        await homePage.checkInViewport(homePage.headerTxt);
    });
}

export async function checkSubscribeMsg(commonPage: CommonPage) {
    await test.step("Then I verify success message 'You have been successfully subscribed!' is visible", async () => {
        await commonPage.checkVisibility(commonPage.subscriptionMsg);
    });
}

