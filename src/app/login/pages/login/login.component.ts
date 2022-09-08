import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { RoleModalComponent } from '../role-modal/role-modal.component';
import { MatDialog } from '@angular/material/dialog';

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
    email: new FormControl(this.user.email, [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl(this.user.password, [Validators.required]),
  });
  constructor(
    private router: Router,
    private auth: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  showModal() {
    this.onRequest = false;
    const roles = [
      { role: 'Administrador', icon: 'settings' },
      { role: 'Lider de grupo de investigacion', icon: 'person' },
      { role: 'Coordinador Investigacion Facultad', icon: 'group' },
      { role: 'Profesional de investigacion', icon: 'face' },
      { role: 'Director de programa', icon: 'rocket_launch' },
      { role: 'Docente', icon: 'emoji_people' },
      { role: 'Docente lider semillero', icon: 'diversity_3' },
      { role: 'Docente investigador', icon: 'potted_plant' },
      { role: 'Biblioteca', icon: 'diversity_4' },
      { role: 'Administrador', icon: 'sentiment_very_satisfied' },
      { role: 'Visitante', icon: 'favorite' },
    ];
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

  login() {
    const user = this.loginForm.getRawValue();
    localStorage.setItem('user_data', JSON.stringify(user));
    this.router.navigate(['/policy']);
  }
}
