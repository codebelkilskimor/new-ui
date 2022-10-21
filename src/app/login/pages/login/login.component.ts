import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { RoleModalComponent } from '../role-modal/role-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';

export interface LoginUser {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hidePassword: boolean = true;
  onRequest: boolean = false;
  user: LoginUser = {
    email: '',
    password: '',
  };
  loginForm = new FormGroup({
    correo_est: new FormControl(this.user.email, [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl(this.user.password, [Validators.required]),
  });

  constructor(
    private router: Router,
    private auth: AuthService,
    public dialog: MatDialog,
    private loginServ: LoginService
  ) {}
  
  ngOnInit(): void {}

  showModal() {
    console.log(this.loginForm.value)
    
    this.loginServ
    .iniciarSesion(this.loginForm.value)
    .subscribe((resp: any) => {
      console.log(resp);
      const roles = resp.roles;
        setTimeout(() => {
          const dialogRef = this.dialog.open(RoleModalComponent, {
            width: '550px',
            data: { roles },
            disableClose: true,
          });
          dialogRef.afterClosed().subscribe((result) => {
            if (result.success) {
              this.login();
            }
          });
        }, 2000);
      }
    );


   
  }

  login() {
    const user = this.loginForm.getRawValue();
    localStorage.setItem('user_data', JSON.stringify(user));
    this.router.navigate(['/policy']);
  }
}
