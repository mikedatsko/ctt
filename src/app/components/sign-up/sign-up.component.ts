import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  errorName = false;
  errorEmail = false;
  errorPassword = false;
  isLoading = true;
  subscribers: any = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.isLoading = false;
  }

  signUp({name, email, password}) {
    this.isLoading = true;
    this.errorName = false;
    this.errorEmail = false;
    this.errorPassword = false;

    if (!name) {
      this.errorName = true;
    }

    if (!email) {
      this.errorEmail = true;
    }

    if (!password) {
      this.errorPassword = true;
    }

    if (this.errorName || this.errorEmail || this.errorPassword) {
      this.isLoading = false;
      return;
    }

    this.subscribers.push(this.http.post('api/user', {name, email, password}).subscribe((response: any) => {
      if (response.message === 'SAVE_SUCCESS') {
        this.router.navigate(['/sign-in']);
      } else {
        this.isLoading = false;
      }
    }));
  }

  ngOnDestroy() {
    this.subscribers.forEach(subscriber => subscriber.unsubscribe());
  }
}
