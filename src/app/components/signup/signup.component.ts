import { Component } from '@angular/core';
import { CustomCommonModule } from '../../shared/common-modules';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericHttpService } from '../../services/Generic-http.service';
import { AuthService } from '../../services/auth.service';
import { AuthRequestModel, AuthResponseModel } from '../../models/auth.interface';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CustomCommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  submitted: boolean = false;
  signupForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
  });

  constructor(private _http: GenericHttpService, private _auth: AuthService) { }

  SignUp() {
    if (this.signupForm.valid) {
      var body: AuthRequestModel = {
        email: this.signupForm.get("email")?.value,
        password: this.signupForm.get("password")?.value,
        returnSecureToken: true
      };
      this._http.GenericPostService<AuthResponseModel>(this._http.fbSignUpUrl, body).subscribe((d: AuthResponseModel) => {
        this._auth.SignIn(d);
      })
    } else {
      this.submitted = true;
    }
  }
}
