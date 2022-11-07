import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { RoleModalComponent } from '../role-modal/role-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { TokenService } from '../../../services/token.service';
import { LoggedService } from '../../../services/logged.service';

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
    rol: new FormControl()
  });

  constructor(
    private router: Router,
    private auth: AuthService,
    private logged: LoggedService,
    public dialog: MatDialog,
    private loginServ: LoginService,
    private tokenServ: TokenService
  ) {}
  
  ngOnInit(): void {}

  showModal() {
    this.loginServ
    .getRoles(this.loginForm.value)
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
            console.log(result);
            if (result.success) {
              this.login(result.role);
            }
          });
        }, 2000);
      }
    );
  }

  iniciarSesion() {
    return new Promise(resolve => {
      this.loginServ.iniciarSesion(this.loginForm.value).subscribe(
        (data: any) => resolve(data)
      )
    })
  }

  async login(rol: string) {
    this.loginForm.patchValue({
      rol: rol
    })
    localStorage.setItem('user_data', JSON.stringify(this.loginForm.value));
    localStorage.setItem('rol', btoa(rol));
    const sessionData: any = await this.iniciarSesion()
    this.tokenServ.set(sessionData.access_token)
    if (sessionData.politicas == 0) {
      this.router.navigate(['/policy']);
    } else {
      this.logged.changeAuthStatus(true)
      localStorage.removeItem('user_data')
      this.router.navigateByUrl('/admin/reportes')
    }  
  }
}
