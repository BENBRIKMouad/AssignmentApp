import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assigment-app';
  constructor(private authService: AuthService,private router: Router) { }
  onLogIn(){
    if(!this.authService.loggedIn){
      this.authService.logIn();
    }else{
      this.router.navigate(['/home'])
      this.authService.logOut();
    }

  }
}
