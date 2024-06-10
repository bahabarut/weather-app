import { AuthResponseModel } from './../../models/auth.interface';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenericHttpService } from '../../services/Generic-http.service';
import { AuthRequestModel } from '../../models/auth.interface';
import { AuthService } from '../../services/auth.service';
import { CustomCommonModule } from '../../shared/common-modules';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CustomCommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  submitted: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
  });

  constructor(private _http: GenericHttpService, private _auth: AuthService,private _toast: ToastService) { }

  SignIn() {
    if (this.loginForm.valid) {
      var body: AuthRequestModel = {
        email: this.loginForm.get("email")?.value,
        password: this.loginForm.get("password")?.value,
        returnSecureToken: true
      };
      this._http.GenericPostService<AuthResponseModel>(this._http.fbSignInUrl, body).subscribe({
        next: e => {
          this._toast.ShowToast("Welcome!!",true);
          this._auth.SignIn(e);
          },
          error: err => {
          this._toast.ShowToast("ERROR!!",false);
        }
      });
    } else {
      this.submitted = true;
    }
  }
}
