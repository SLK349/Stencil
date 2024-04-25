'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713f5fda.js');
const utils = require('./utils-bcad3386.js');

const loginFormCss = "";
const LoginFormStyle0 = loginFormCss;

const LoginForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.loginSucess = index.createEvent(this, "loginSucess", 7);
        this.loginError = index.createEvent(this, "loginError", 7);
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
        return (index.h("form", { key: 'caa2c6dc60e9c4164d14acf93fa16e29c80d8d4e', onSubmit: event => this.handleSubmit(event) }, index.h("label", { key: 'd479c90c6d2103d96cbc06a7c6d22bb85a8734e4' }, "Email"), index.h("input", { key: '971f52ade2936662f9e9fc638d96547e196dba9c', type: "email", value: this.email, onInput: event => this.handleEmailChange(event) }), index.h("label", { key: '118e8a06c7ab0ad54c3d40a7e2390635f168492e' }, "Password"), index.h("input", { key: 'b4ca6a608b326f60c67f1e63d2bfa8e5e07171e9', type: "password", value: this.password, onInput: event => this.handlePasswordChange(event) }), index.h("label", { key: '702df3a4a0c33238ce10b4b8b00dc095b8b1a638' }, "Code"), index.h("input", { key: '0fb62040201b24d1bad5ea076c6b02c1d34eae0f', type: "text", value: this.code, onInput: event => this.handleCodeChange(event) }), index.h("button", { key: 'fb51309b02f8ec51d7af3fe5a47a29abeac1bc82', type: "submit" }, "Login")));
    }
};
LoginForm.style = LoginFormStyle0;

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    getText() {
        return utils.format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", { key: 'f69a3eab25e24351c6b9a7956cd4644b41c2d7f3' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = MyComponentStyle0;

exports.login_form = LoginForm;
exports.my_component = MyComponent;

//# sourceMappingURL=login-form_2.cjs.entry.js.map