import { EventEmitter } from '../../stencil-public-runtime';
export declare class LoginForm {
    email: string;
    password: string;
    loginSucess: EventEmitter;
    loginError: EventEmitter;
    private handleEmailChange;
    private handlePasswordChange;
    private handleSubmit;
    render(): any;
}
