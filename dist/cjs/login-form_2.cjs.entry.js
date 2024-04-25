'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63b74c99.js');
require('./gesture-controller-c77f93be.js');
const overlays = require('./overlays-67c5782c.js');
const utils = require('./utils-bcad3386.js');
require('./index-a370c7e1.js');
require('./helpers-0f03deef.js');
require('./hardware-back-button-e87df2c5.js');
require('./ionic-global-79bd1147.js');
require('./framework-delegate-ea328c64.js');
require('./index-7d4ba1aa.js');

const loginFormCss = ".container{display:flex;justify-content:center;align-items:center;height:100vh}form{display:flex;flex-direction:column;padding:25px;width:20%;min-width:300px;max-width:500px;border:1px solid grey;border-radius:10px}label{margin-bottom:8px}input{padding:8px;margin-bottom:16px;border:1px solid #ccc;border-radius:4px}button{padding:8px 16px;background-color:#007bff;color:white;border:none;border-radius:4px;cursor:pointer}button:hover{background-color:#0056b3}";
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
        const toast = await overlays.toastController.create({
            message: message,
            duration: 2500,
            cssClass: 'toast-message',
        });
        await toast.present();
    }
    render() {
        return (index.h("div", { key: '85676e8b4757a31b559115f3a48fd7d770241f3a', class: "container" }, index.h("form", { key: '0c0c075d26c1659e4f1fd49d974aad74406505a1', onSubmit: event => this.handleSubmit(event) }, index.h("label", { key: 'df10f580a68f3b40856640c498c33ab01a19f9c7' }, "Email"), index.h("input", { key: '4ac005cce117987333373791e40a37565e26f7d2', type: "email", value: this.email, onInput: event => this.handleEmailChange(event) }), index.h("label", { key: 'c756a645d2833100bf9d7873ef24315ad53f036f' }, "Password"), index.h("input", { key: '52036afc8f88977b7ea88c193988dd648a62016d', type: "password", value: this.password, onInput: event => this.handlePasswordChange(event) }), index.h("label", { key: '4a90864dfb11d44aa0a9ffb1d953cee02a60b63e' }, "Code"), index.h("input", { key: 'd06268449bea481ad3e72626176cfbc877a52102', type: "text", value: this.code, onInput: event => this.handleCodeChange(event) }), index.h("button", { key: '08d48ba9c6d10da79ce8bc0f24c240ab1078d996', type: "submit" }, "Login"))));
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
        return index.h("div", { key: 'f22db8dc65658ebe2ae2b385abbd43c64987fec2' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = MyComponentStyle0;

exports.login_form = LoginForm;
exports.my_component = MyComponent;

//# sourceMappingURL=login-form_2.cjs.entry.js.map