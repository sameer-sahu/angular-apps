import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-template-driven';

  // To store the Local Reference
  @ViewChild('f') signupForm: NgForm;

  defaultQ = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secret: '',
    quesAns: '',
    gender: ''
  }

  submitted = false;

  suggestUsername() {
    const suggestUsername = 'SuperUser';
    
    /* this.signupForm.setValue({
      userData: {
        username: suggestUsername,
        email: ''
      },
      secret: this.defaultQ,
      quesAns: '',
      gender: 'male'
    }); */

    // Prevent Overriding old value
    this.signupForm.form.patchValue({
      userData: {
        username: suggestUsername
      }
    });
  }

  /* onSubmit(form: HTMLFormElement) {
    console.log('Submitted!');
    console.log(form); // As Form HTML Element
  } */

  /* onSubmit(form: NgForm) {
    console.log('Submitted!');
    console.log(form); // As JS Object
  } */

  onSubmit() {
    console.log('Submitted!');
    console.log(this.signupForm);

    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;

    this.signupForm.reset();
  }
}
