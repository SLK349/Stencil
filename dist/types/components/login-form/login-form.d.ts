import { EventEmitter } from '../../stencil-public-runtime';
import './toast.css';
export declare class LoginForm {
    email: string;
    password: string;
    code: string;
    loginSucess: EventEmitter;
    loginError: EventEmitter;
    private handleEmailChange;
    private handlePasswordChange;
    private handleCodeChange;
    private handleSubmit;
    private presentToast;
    render(): any;
}
