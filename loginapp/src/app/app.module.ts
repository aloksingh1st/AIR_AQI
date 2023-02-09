import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './MyCompo/register/register.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { appRoutes } from './routes';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AirComponent } from './air/air/air.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './air/card/card.component';
import { HeaderComponent } from './air/header/header.component';
import { WishlistComponent } from './air/wishlist/wishlist.component';
import { UsersService } from './shared/users.service';

import { AuthGuard } from './auth/auth.guard';

import { HttpClientJsonpModule } from '@angular/common/http';
import { UpdateComponent } from './air/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserComponent,
    SignupComponent,
    AirComponent,
    CardComponent,
    HeaderComponent,
    WishlistComponent,
    UpdateComponent
  ],
  imports: [
    FormsModule,
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AuthGuard,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
