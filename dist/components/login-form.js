import { p as proxyCustomElement, H, d as createEvent, h } from './p-53634f3f.js';
import './p-d167d7f3.js';
import './p-c7ee7cfe.js';
import { t as toastController } from './p-697238e7.js';

const loginFormCss = ".container{display:flex;justify-content:center;align-items:center;height:100vh}form{display:flex;flex-direction:column;padding:25px;width:20%;min-width:300px;max-width:500px;border:1px solid grey;border-radius:10px}label{margin-bottom:8px}input{padding:8px;margin-bottom:16px;border:1px solid #ccc;border-radius:4px}button{padding:8px 16px;background-color:#007bff;color:white;border:none;border-radius:4px;cursor:pointer}button:hover{background-color:#0056b3}";
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
                await this.presentToast('Connexion réussie');
            }
            catch (error) {
                this.loginError.emit(error.message);
                await this.presentToast('Erreur lors de la connexion');
            }
        };
        this.email = '';
        this.password = '';
        this.code = '';
    }
    async presentToast(message) {
        const toast = await toastController.create({
            message: message,
            duration: 2500,
            cssClass: 'toast-message',
        });
        await toast.present();
    }
    render() {
        return (h("div", { key: '85676e8b4757a31b559115f3a48fd7d770241f3a', class: "container" }, h("form", { key: '0c0c075d26c1659e4f1fd49d974aad74406505a1', onSubmit: event => this.handleSubmit(event) }, h("label", { key: 'df10f580a68f3b40856640c498c33ab01a19f9c7' }, "Email"), h("input", { key: '4ac005cce117987333373791e40a37565e26f7d2', type: "email", value: this.email, onInput: event => this.handleEmailChange(event) }), h("label", { key: 'c756a645d2833100bf9d7873ef24315ad53f036f' }, "Password"), h("input", { key: '52036afc8f88977b7ea88c193988dd648a62016d', type: "password", value: this.password, onInput: event => this.handlePasswordChange(event) }), h("label", { key: '4a90864dfb11d44aa0a9ffb1d953cee02a60b63e' }, "Code"), h("input", { key: 'd06268449bea481ad3e72626176cfbc877a52102', type: "text", value: this.code, onInput: event => this.handleCodeChange(event) }), h("button", { key: '08d48ba9c6d10da79ce8bc0f24c240ab1078d996', type: "submit" }, "Login"))));
    }
    static get style() { return LoginFormStyle0; }
}, [1, "login-form", {
        "email": [32],
        "password": [32],
        "code": [32]
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