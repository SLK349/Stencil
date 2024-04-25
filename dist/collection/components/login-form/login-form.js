import { h } from "@stencil/core";
export class LoginForm {
    constructor() {
        this.handleEmailChange = (event) => {
            this.email = event.target.value;
        };
        this.handlePasswordChange = (event) => {
            this.password = event.target.value;
        };
        this.handleSubmit = async (event) => {
            event.preventDefault();
            try {
                const response = await fetch('http://localhost:3001/api/authenticate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: this.email, password: this.password }),
                });
                if (!response.ok) {
                    throw new Error(await response.text());
                }
                const data = await response.json();
                this.loginSucess.emit(data);
            }
            catch (error) {
                this.loginError.emit(error.message);
            }
        };
        this.email = '';
        this.password = '';
    }
    render() {
        return (h("form", { key: '3841a10ad365720b31af0974bfa40bca0b1adb35', onSubmit: event => this.handleSubmit(event) }, h("label", { key: '7760ddb80e2a82b1beb75398407ade57554f8c00' }, "Email"), h("input", { key: 'a80e7bc8f31c9a22533fbcf8e6a0c3d588d9557c', type: "email", value: this.email, onInput: event => this.handleEmailChange(event) }), h("label", { key: '3090044b5d463b3ead5ea6f9fcc12dd91bcc882a' }, "Password"), h("input", { key: 'a2166fb2cc2fb35398a0f726d2d1c222710e0be0', type: "password", value: this.password, onInput: event => this.handlePasswordChange(event) }), h("button", { key: '26938e1753d9864cf173431530e1367a8bb78c51', type: "submit" }, "Login")));
    }
    static get is() { return "login-form"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["login-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["login-form.css"]
        };
    }
    static get states() {
        return {
            "email": {},
            "password": {}
        };
    }
    static get events() {
        return [{
                "method": "loginSucess",
                "name": "loginSucess",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "loginError",
                "name": "loginError",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=login-form.js.map
