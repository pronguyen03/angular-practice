import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { interval, Subscription, Observable } from 'rxjs';
import { Message } from '../message';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  loading = false;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }
  messages$: Observable<Message[]>;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });

    this.myForm.valueChanges.subscribe(console.log);

    this.messages$ = this.afs.collection<Message>('message').valueChanges();

  }

  get email() {
    return this.myForm.get('email');
  }

  getEmailErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }

      return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  sendMessage() {
    this.loading = true;
    const dataValue = this.myForm.value;

    this.afs.collection('message').add(dataValue)
      .then(result => {
        this.loading = false;
        console.log('Sent successfully', result);
      })
      .catch(err => {
        this.loading = false;
        console.error(err);
      });
  }
}
