/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <nav class="navbar navbar-default navbar-fixed fix_nav">
    <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" [routerLink]=" ['./'] ">My LabSpace #2</a>
    </div>
      <ul class="nav navbar-nav">
            <li [routerLink]=" ['./add'] "
              routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
              <a>Add Project</a>
            </li>
            <li [routerLink]=" ['./clean'] "
              routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
              <a>Clean all the projects</a>
            </li>
            <li [routerLink]=" ['./json'] "
              routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
              <a>Export to JSON</a>
            </li>
        </ul>
      </div>
    </nav>

    <div *ngFor="let exp of experiments; let i = index;">
      <div class="container-fluid">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4><!-- Laboratory name -->
              <a class="inline" href="#">{{ exp.Name }} #{{i+1}}</a>
              <!-- last-update -->
              <div class="inline pull-right">
                <small>{{ exp.lastUpdate}}</small>
              </div>
            </h4>
          </div>
          <!-- Laboratory description -->
          <div class="description">
            <p class="text-left">{{ exp.Description }}</p>
          </div>
      </div>
    </div>
    </div>

  <div class="container-fluid">
    <div class="panel panel-default">
      <div class="row">
        <main>
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  </div>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 MyLab2';
  public url = 'https://twitter.com/';

  // Lab work

  public experiments = [];

  constructor(
    public appState: AppState
  ) {
      this.experiments = this.appState.get_experiments();
   }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
