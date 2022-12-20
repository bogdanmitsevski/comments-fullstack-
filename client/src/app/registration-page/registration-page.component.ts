import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit, OnDestroy{

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.recaptcha = captchaResponse;
  }

  
  protected aFormGroup!: FormGroup;
  recaptcha: string = '';
  form!: FormGroup
  aSub!: Subscription

  constructor (private auth: AuthService, private router:Router) {

  }

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  };

  ngOnDestroy() {
    if(this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit () {
    this.form.disable()
    this.aSub = this.auth.registration(this.form.value).subscribe(
      () => {this.router.navigate(['/login'], {
        queryParams: {
          registered: true
        }
      })},
        error => { console.warn(error),
          this.form.enable()

      }
    )
  }

}
