import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'login-form',
  styleUrl: 'login-form.css',
  shadow: true,
})
export class LoginForm {
  @State() email: string = '';
  @State() password: string = '';

  @Event() loginSucess: EventEmitter;
  @Event() loginError: EventEmitter;

  private handleEmailChange = (event: Event) => {
    this.email = (event.target as HTMLInputElement).value;
  };

  private handlePasswordChange = (event: Event) => {
    this.password = (event.target as HTMLInputElement).value;
  };

  private handleSubmit = async (event: Event) => {
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
    } catch (error) {
      this.loginError.emit(error.message);
    }
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>Email</label>
        <input type="email" value={this.email} onInput={event => this.handleEmailChange(event)} />

        <label>Password</label>
        <input type="password" value={this.password} onInput={event => this.handlePasswordChange(event)} />

        <button type="submit">Login</button>
      </form>
    );
  }
}
