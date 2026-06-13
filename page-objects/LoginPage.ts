import { expect, type Locator, type Page } from "@playwright/test";
import CommonPage from "./CommonPage";

class LoginPage extends CommonPage {
    readonly signupBtn:Locator;
    readonly loginBtn:Locator;
    readonly loginEmail:Locator;
    readonly loginPassword:Locator;
    readonly signupName:Locator;
    readonly signupEmail:Locator;

    constructor(public readonly page:Page) {
        super(page);
        this.signupBtn = page.getByRole('button', { name: 'Signup' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.loginEmail = page.locator('[data-qa="login-email"]');
        this.loginPassword = page.locator('[data-qa="login-password"]');
        this.signupName = page.locator('[data-qa="signup-name"]');
        this.signupEmail = page.locator('[data-qa="signup-email"]');
    }
    async fillLogin(email:string, password:string) {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
    }

    async fillSignup(name:string, email:string) {
        await this.signupName.fill(name);
        await this.signupEmail.fill(email);
    }

    async clickLogin() {
        await this.loginBtn.click();
    }
    
    async clickSignup() {
        await this.signupBtn.click();   
    }
        
}
export default LoginPage;