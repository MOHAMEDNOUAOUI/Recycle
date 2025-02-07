import { Component } from '@angular/core';
import { ReactiveInputComponent } from '../../Register/reactive-input/reactive-input.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Login } from '../../../app/core/Auth/AuthAction';

@Component({
  selector: 'app-reactiveform',
  imports: [CommonModule, FormsModule ,ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  loginForm!:FormGroup
  submitted : boolean = false;

  constructor(private store:Store,private fb: FormBuilder){}

  ngOnInit() : void {
    this.loginForm = this.fb.group({
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]]
    })
  }


  onSubmit(event:any) : void {
    event.preventDefault();
    this.submitted = true;
    if(this.loginForm.valid){
      const email:string = this.loginForm.value['email']
      const password:string = this.loginForm.value['password']
      this.store.dispatch(Login({email:email , password:password}))
    }
  }
}
