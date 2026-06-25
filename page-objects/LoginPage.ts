import { type Locator, type Page } from "@playwright/test";
import CommonPage from "./CommonPage";

class LoginPage extends CommonPage {
    readonly signupBtn:Locator;
    readonly loginBtn:Locator;
    readonly loginEmail:Locator;
    readonly loginPassword:Locator;
    readonly signupName:Locator;
    readonly signupEmail:Locator;
    readonly signupTitle:Locator;

    constructor(public readonly page:Page) {
        super(page);
        this.signupBtn = page.getByRole('button', { name: 'Signup' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.loginEmail = page.locator('[data-qa="login-email"]');
        this.loginPassword = page.locator('[data-qa="login-password"]');
        this.signupName = page.locator('[data-qa="signup-name"]');
        this.signupEmail = page.locator('[data-qa="signup-email"]');
        this.signupTitle = page.getByText('New User Signup!');
    }

}
export default LoginPage;