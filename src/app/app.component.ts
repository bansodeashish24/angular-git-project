import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  headerBgColor = '';
  environmentName = '';

  constructor() {
    this.headerBgColor = environment.bgColor;
    this.environmentName = environment.environmentName;
  }

  title = 'angular-git-project';
}
