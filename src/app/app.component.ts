import { Component, OnInit } from '@angular/core';

import { AuthGuardService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authGuardSrv: AuthGuardService) {

  }

  ngOnInit() {

  }

  isLogged() {
    return this.authGuardSrv.isLogged();
  }
}
