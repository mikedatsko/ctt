import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  errorEmail = false;
  errorPassword = false;
  isLoading = true;
  subscribers: any = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.isLoading = false;
  }

  signIn({email, password}) {
    this.isLoading = true;
    this.errorEmail = false;
    this.errorPassword = false;

    if (!email) {
      this.errorEmail = true;
    }

    if (!password) {
      this.errorPassword = true;
    }

    if (this.errorEmail || this.errorPassword) {
      this.isLoading = false;
      return;
    }

    this.subscribers.push(this.http.post('api/user/auth', {email, password}).subscribe((response: any) => {
      if (response.message === 'SAVE_SUCCESS') {
        const token = `${Math.round(Math.random() * 1000)}-${Math.round(Math.random() * 100)}-${Math.round(Math.random() * 10000)}`;
        localStorage.setItem('token', token);
        this.router.navigate(['/']);
      } else {
        this.isLoading = false;
      }
    }, error => this.isLoading = false));
  }

  ngOnDestroy() {
    this.subscribers.forEach(subscriber => subscriber.unsubscribe());
  }
}
