import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  model:any = {};
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 6));
  }

}
