import { EventEmitter } from '../../stencil-public-runtime';
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
    render(): any;
}
