import { Component } from '@angular/core';
import { AuthService } from '../../services/login.service';
import { LoginForm } from '../../class/login-form';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner'; // Importa NgxSpinnerService
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  imageUrl = '/assets/image/GOIA.jpg';
  loginForm: LoginForm = new LoginForm();
  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService // Inyecta NgxSpinnerService
  ) {}
  onSubmit() {
    const { email, password } = this.loginForm;
    this.spinner.show();
    this.authService.login(email, password)
      .pipe(delay(3000)) // Agrega el operador delay
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          this.spinner.hide();
          Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          this.spinner.hide();
          if (error instanceof HttpErrorResponse) {
            if (error.error.message === 'El correo electrónico no está registrado.') {
              Swal.fire({
                icon: 'error',
                title: 'Error en el inicio de sesión',
                text: 'El correo electrónico no está registrado.',
              });
            } else if (error.error.message === 'La contraseña no es correcta.') {
              Swal.fire({
                icon: 'error',
                title: 'Error en el inicio de sesión',
                text: 'La contraseña no es correcta.',
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error en el servidor',
                text: 'Ocurrió un error en el inicio de sesión.',
              });
            }
          }
        }
      );
  }
}