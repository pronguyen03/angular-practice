import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {

  nestedForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const shippingAddress = this.fb.group({
      receiverName: [''],
      address: ['']
    });

    this.nestedForm = this.fb.group({
      customerName: [''],
      email: [''],
      address1: shippingAddress,
      address2: shippingAddress
    });
  }
  
  get email() {
    return this.nestedForm.get('email');
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
