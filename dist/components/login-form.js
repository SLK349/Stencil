import { p as proxyCustomElement, H, c as createEvent, h } from './p-c0bb7121.js';

const loginFormCss = "";
const LoginFormStyle0 = loginFormCss;

const LoginForm$1 = /*@__PURE__*/ proxyCustomElement(class LoginForm extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return LoginFormStyle0; }
}, [1, "login-form", {
        "email": [32],
        "password": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["login-form"];
    components.forEach(tagName => { switch (tagName) {
        case "login-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LoginForm$1);
            }
            break;
    } });
}
defineCustomElement$1();

const LoginForm = LoginForm$1;
const defineCustomElement = defineCustomElement$1;

export { LoginForm, defineCustomElement };

//# sourceMappingURL=login-form.js.map