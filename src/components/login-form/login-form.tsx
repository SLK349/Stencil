import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { toastController } from '@ionic/core';
import './toast.css';

@Component({
  tag: 'login-form',
  styleUrl: 'login-form.css',
  shadow: true,
})
export class LoginForm {
  @State() email: string = '';
  @State() password: string = '';
  @State() code: string = '';

  @Event() loginSucess: EventEmitter;
  @Event() loginError: EventEmitter;

  private handleEmailChange = (event: Event) => {
    this.email = (event.target as HTMLInputElement).value;
  };

  private handlePasswordChange = (event: Event) => {
    this.password = (event.target as HTMLInputElement).value;
  };

  private handleCodeChange = (event: Event) => {
    this.code = (event.target as HTMLInputElement).value;
  };

  private handleSubmit = async (event: Event) => {
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
    } catch (error) {
      this.loginError.emit(error.message);
      await this.presentToast('Erreur lors de la connexion');
    }
  };

  private async presentToast(message: string) {
    const toast = await toastController.create({
      message: message,
      duration: 2500,
      cssClass: 'toast-message',
    });
    await toast.present();
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Email</label>
          <input type="email" value={this.email} onInput={event => this.handleEmailChange(event)} />

          <label>Password</label>
          <input type="password" value={this.password} onInput={event => this.handlePasswordChange(event)} />

          <label>Code</label>
          <input type="text" value={this.code} onInput={event => this.handleCodeChange(event)} />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
