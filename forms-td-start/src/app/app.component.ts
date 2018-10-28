import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChild('form') singupForm: NgForm;

  defaultQuestion = 'pet';

  answare = '';

  genders = ['Male', 'Femle'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answare: ''
  };


  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.singupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    // },
    // secret: 'pet',
    // questionAnswer: '',
    // gender: 'male' });
    this.singupForm.form.patchValue({ userData: {  username: suggestedName } });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.singupForm);
    this.user.username = this.singupForm.value.userData.username;

    this.singupForm.reset();
  }
}
