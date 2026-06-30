import { test as base } from '@playwright/test';
import UserAPI from "../api-utils/UserAPI";

export const test = base.extend<{ userAPI: UserAPI }> ({
    userAPI: async ({}, use) => {
        const api = new UserAPI();
        await api.setNewUser();

        await use(api);
        
        await api.deleteUser(api.user);
    }
});