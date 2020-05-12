import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  loading = false;
  dataValue = new Message('', '');

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
  }

  sendMessage(dataValue: any) {
    this.loading = true;
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
