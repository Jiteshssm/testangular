import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoText="Start Bootstrap";
  navItem=[
    {"itemName":"Template Driven Form", "linkUrl":"/"},
    {"itemName":"Rective Form", "linkUrl":"/reactiveform"}
  ];  
  constructor() { }

  ngOnInit(): void {
  }

}
