import { request, expect } from '@playwright/test';
import {generateNewUser, type UserData} from '../test-data/userFactory';

type URLData = {
    createUser: string;
    deleteUser: string;
};

export default class UserAPI {
    readonly url: URLData;
    readonly user: UserData;

    constructor (){
        this.url = {
            createUser : 'https://automationexercise.com/api/createAccount',
            deleteUser : 'https://automationexercise.com/api/deleteAccount',
        };
        this.user = generateNewUser();
    }

    async setNewUser(){
        const context = await request.newContext();
        const signUpResponse = await context.post(
            this.url.createUser,
            {form: this.user}
        );
        const responseBody = await signUpResponse.json();
        expect(responseBody.responseCode).toBe(201);
        expect(responseBody.message).toBe('User created!');
        console.log(responseBody.message);
    }

    async deleteUser(user:UserData){
        const context = await request.newContext();
        const response = await context.delete(
            this.url.deleteUser,{
                form: {
                    email :  user.email, 
                    password : user.password
                }
            }
        );
        const responseBody = await response.json();
        expect(responseBody.responseCode).toBe(200);
        expect(responseBody.message).toBe('Account deleted!');
        console.log(responseBody.message);
    }

};

