import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthService } from './auth.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { RegisterPartTwoComponent } from './register-part-two/register-part-two.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    loginComponent,
    RegisterPartTwoComponent,
    HomeComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'register', component: RegisterComponent},
      { path: 'registerP2', component: RegisterPartTwoComponent },
      { path: 'login', component: loginComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
