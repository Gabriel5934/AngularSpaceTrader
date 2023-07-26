import { Component } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, NgIf],
})
export class AppComponent {
  title = 'AngularSpaceTrader';

  registration = {
    faction: '',
    name: '',
  };

  id: string | undefined = undefined;

  updateRegistration(key: string, value: string) {
    this.registration[key as keyof typeof this.registration] = value;
  }

  registerAgent() {
    console.log(this.registration);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        symbol: this.registration.name,
        faction: this.registration.faction,
      }),
    };

    fetch('https://api.spacetraders.io/v2/register', options)
      .then((response) => response.json())
      .then((response) => (this.id = response.data.agent.accountId))
      .catch((err) => console.error(err));
  }

  copyId() {
    navigator.clipboard
      .writeText(this.id ?? 'undefined')
      .then(undefined, (err) =>
        console.error('Async: Could not copy text: ', err)
      );
  }
}
