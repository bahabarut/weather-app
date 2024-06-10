import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from "@angular/material/core";
import { GenericHttpService } from "../services/Generic-http.service";
import { UnsubscriptionService } from "../services/unsubscription.service";
import { NgClass } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LottieAnimationViewModule } from "ng-lottie";
import { LottieComponent } from "ngx-lottie";
const modules = [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    ReactiveFormsModule,
    NgClass,
    RouterModule,
    LottieComponent
    
]
@NgModule({
    declarations: [],
    imports: [modules],
    exports: [modules],
    providers: [GenericHttpService, UnsubscriptionService]

})
export class CustomCommonModule { }