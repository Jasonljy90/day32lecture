import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RSVP } from '../models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  regForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  // Called after constructor for initialisation
  ngOnInit(): void {
    this.regForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>(''),
      email: this.fb.control<string>(''),
      age: this.fb.control<number>(18),
      attendance: this.fb.control<string>(''),
    });
  }

  processForm() {
    //const rsvp = this.regForm.value as RSVP;
    //console.log('>>>> Processing', rsvp);
    const rsvp: RSVP = {
      name: this.regForm.get('name')?.value,
      email: this.regForm.get('email')?.value,
      age: this.regForm.get('age')?.value,
      attendance: this.regForm.get('attendance')?.value,
    };
    console.log('>>>> Processing', rsvp);
    this.regForm = this.createForm();
    //this.regForm.reset();
  }
}
