import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  showLabel() {
    this.name = 'Name';
  }
  showLabelE() {
    this.email = 'Email Address';
  }
  showLabelp() {
    this.phone = 'Phone Number';
  }
  showLabelm() {
    this.massage = 'Massage';
  }
  styleLabel: string = 'color:#1abc9c ;margin-bottom:0.5rem ;';
  name: String = '';
  email: string = '';
  phone: string = '';
  massage: string = '';

  constructor() {}

  ngOnInit(): void {}
}
