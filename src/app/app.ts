import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email } from '@angular/forms/signals';


@Component({
  selector: 'app-root',
  imports: [NgFor,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // students = ['John', 'Jane', 'Jim'];

  // studdentsData=[
  //   {
  //     name:'John',
  //     age:20,
  //     email:'john@gmail.com'
  //   },
  //   {
  //     name:'Jane',
  //     age:22,
  //     email:'jane@gmail.com'
  //   },
  //   {
  //     name:'Jim',
  //     age:21,
  //     email:'jim@gmail.com'
  //   }
  // ]

  login=true;
}
