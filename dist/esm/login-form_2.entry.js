import { r as registerInstance, c as createEvent, h } from './index-0b121673.js';
import { f as format } from './utils-11fcde98.js';

const loginFormCss = "";
const LoginFormStyle0 = loginFormCss;

const LoginForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.loginSucess = createEvent(this, "loginSucess", 7);
        this.loginError = createEvent(this, "loginError", 7);
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
};
LoginForm.style = LoginFormStyle0;

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: '3608fd529e2d32338c4e8b71974e2b5c3bac0968' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = MyComponentStyle0;

export { LoginForm as login_form, MyComponent as my_component };

//# sourceMappingURL=login-form_2.entry.js.map