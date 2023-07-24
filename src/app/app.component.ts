import { Component } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase]
})
export class AppComponent {
  title = 'AngularSpaceTrader';
}
