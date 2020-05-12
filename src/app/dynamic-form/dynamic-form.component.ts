import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  dynamicForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this.fb.group({
      customerName: [''],
      email: [''],
      shippingAddressess: this.fb.array([]),
    });
  }

  get shippingAddressForm() {
    return this.dynamicForm.get('shippingAddressess') as FormArray;
  }

  get email() {
    return this.dynamicForm.get('email');
  }

  getEmailErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }

      return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  addShippingAddress() {
    const shippingAddress = this.fb.group({
      receiverName: [''],
      address: ['']
    });

    this.shippingAddressForm.push(shippingAddress);
  }

  deleteShippingAddress(i: number) {
    this.shippingAddressForm.removeAt(i);
  }
}
