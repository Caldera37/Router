import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppComponent } from "./app.component";
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [AppComponent, UserComponent, SignupComponent, MenuComponent,],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), FormsModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
