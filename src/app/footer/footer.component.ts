import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyrightText ="Copyright © Your Website 2020";
  constructor() { }

  ngOnInit(): void {
  }

}
