import { test as base } from '@playwright/test';
import UserAPI from "../api-utils/UserAPI";
import {deleteSamplePdf, createSamplePdf} from "../test-data/pdfFactory";

export const test = base.extend<{ 
        userAPI: UserAPI, 
        samplePdf: string 
}> ({
    
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

