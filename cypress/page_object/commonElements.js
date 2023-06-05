class CommonElements {

    get emailInputFieldLogin() {
        return cy.get('#email')
    }
    get passwordInputFieldLogin() {
        return cy.get('#password')
    }
    get submitBtnLoginPage() {
        return cy.get('[type="submit"]')
    }

    loginUserFE(email, password) {
        cy.visit('login');
        this.emailInputFieldLogin.type(email);
        this.passwordInputFieldLogin.type(password);
        this.submitBtnLoginPage.click()
    }

}

export const commonElements = new CommonElements()