import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

declare var M: any;


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }


  constructor(private authService: AuthService, private router: Router)
    { 


    }

  ngOnInit() {
  }

  onClickMe(){
    
  }
  

  signIn(){
    this.authService.signIn(this.user)
    .subscribe( res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/playlist']);
      
    }, err => {
      console.log(err);
      M.toast({html: 'Contraseña Incorrecta O Correo No Valido', classes: 'rounded'});
    })
  }

}
