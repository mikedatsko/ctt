import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  TranslationListComponent,
  LoaderComponent,
  SignInComponent, 
  SignOutComponent, 
  SignUpComponent,
  LanguageListComponent
} from './components';
import { AuthGuardService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    TranslationListComponent,
    LoaderComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    LanguageListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'translation-list'
      },
      {
        path: 'translation-list',
        component: TranslationListComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'language-list',
        component: LanguageListComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-out',
        component: SignOutComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
