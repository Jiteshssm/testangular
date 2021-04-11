import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  registerForm:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title:['', Validators.required],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      dob:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(7)]],
      confirmPassword:['', Validators.required],
      acceptTerms:[false, Validators.requiredTrue]
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.submitted=true;
     if(this.registerForm.invalid){
       return;
     }
     alert('SUCCESS!! :-)\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

}
