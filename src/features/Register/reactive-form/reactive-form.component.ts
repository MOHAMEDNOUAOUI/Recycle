import { Component, OnInit } from '@angular/core';
import { ReactiveInputComponent } from "../reactive-input/reactive-input.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Utilisateur } from '../../../app/core/models/Utilisateur.model';
import { Store } from '@ngrx/store';
import { Register } from '../../../app/core/Auth/AuthAction';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
  standalone:true
})
export class ReactiveFormComponent implements OnInit {
  registerForm!:FormGroup;
  submitted : boolean = false;

  constructor(private fb:FormBuilder , private store:Store){}
  
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email , Validators.maxLength(255) , Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      phone: ['', [Validators.pattern('^[0-9]+$') , Validators.required]],
      birthday: [''],
      profile: [null],
      role: ['individual'],
      demande: [[]]
    });
  }

  onSubmit(event:any): void {
    event.preventDefault();
    this.submitted  = true;

    if (this.registerForm.valid) {
      const user:Utilisateur = this.registerForm.value;
      this.store.dispatch(Register({utilisateur:user}));
    } else {
      console.log('Form is invalid');
    }
  }

}
