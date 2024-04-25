import { h } from "@stencil/core";
export class LoginForm {
    constructor() {
        this.handleEmailChange = (event) => {
            this.email = event.target.value;
        };
        this.handlePasswordChange = (event) => {
            this.password = event.target.value;
        };
        this.handleCodeChange = (event) => {
            this.code = event.target.value;
        };
        this.handleSubmit = async (event) => {
            event.preventDefault();
            try {
                const response = await fetch('http://localhost:3001/api/authenticate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: this.email, password: this.password, code: this.code }),
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
        this.code = '';
    }
    render() {
        return (h("form", { key: 'caa2c6dc60e9c4164d14acf93fa16e29c80d8d4e', onSubmit: event => this.handleSubmit(event) }, h("label", { key: 'd479c90c6d2103d96cbc06a7c6d22bb85a8734e4' }, "Email"), h("input", { key: '971f52ade2936662f9e9fc638d96547e196dba9c', type: "email", value: this.email, onInput: event => this.handleEmailChange(event) }), h("label", { key: '118e8a06c7ab0ad54c3d40a7e2390635f168492e' }, "Password"), h("input", { key: 'b4ca6a608b326f60c67f1e63d2bfa8e5e07171e9', type: "password", value: this.password, onInput: event => this.handlePasswordChange(event) }), h("label", { key: '702df3a4a0c33238ce10b4b8b00dc095b8b1a638' }, "Code"), h("input", { key: '0fb62040201b24d1bad5ea076c6b02c1d34eae0f', type: "text", value: this.code, onInput: event => this.handleCodeChange(event) }), h("button", { key: 'fb51309b02f8ec51d7af3fe5a47a29abeac1bc82', type: "submit" }, "Login")));
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
            "password": {},
            "code": {}
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
