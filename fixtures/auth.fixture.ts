import {test as base}  from '@playwright/test';
import LoginPage                from '../page-objects/LoginPage';
import CartPage                 from '../page-objects/CartPage';
import HomePage                 from '../page-objects/HomePage';
import ProductsPage             from '../page-objects/ProductsPage';

const loginPayload: {email: string, password: string} = {
    email: 'sss',
    password: 'sss'
};

type PageTypes = {
    productsPage: ProductsPage;
    cartPage: CartPage;
    loginPage: LoginPage;
    homePage: HomePage;
};

export const test = base.extend<PageTypes>({
    productsPage: async ({page}, use) => {
        const response = await page.request.post(
            'https://automationexercise.com/login',
            { data : loginPayload }

        );

        const body = await response.json();
        if (body.responseCode !== 200) {
            throw new Error(`API Login has failed: ${JSON.stringify(body)}`);
        }
        await page.goto('https://automationexercise.com/products');
        
        //include validation of accessed corretly as the user here
        
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    },

});