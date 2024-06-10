import { Injectable } from "@angular/core";
import { AuthResponseModel } from "../models/auth.interface";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor(private _router: Router) {

    }
    SignIn(d: AuthResponseModel) {
        if (d.idToken.length > 1) {
            localStorage.setItem("token", d.idToken);
            this._router.navigateByUrl("/home");
        }
    }
    SignUp(d: AuthResponseModel) {
        this._router.navigateByUrl("/login");
    }

}