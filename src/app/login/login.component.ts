import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from 'ngx-alerts';
import {LoginServiceService} from './services/login-service.service';
import {LoginResponse} from './models/login-response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private loginService: LoginServiceService,
    private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    if (this.formLogin.valid === true) {
      this.router.navigateByUrl('/home').then((res) => {
        console.log('RES', res);
      }).catch(reason => {
        console.log('Error' + reason);
      });
      const email = this.formLogin.get('email').value;
      const password = this.formLogin.get('password').value;
      console.log(email, password);
      this.loginService.login(email, password).subscribe((response: LoginResponse) => {
        if (response.status === 'OK') {
          this.alertService.success('Bienvenido');
        } else {
          throw new Error('Error');
        }
      });
    }
  }
}
