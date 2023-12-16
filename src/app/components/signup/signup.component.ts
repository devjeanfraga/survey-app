import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormBuilder, Validators} from '@angular/forms';
import { AccountService } from '../../services/account.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  {
  @Output() toggleToLogin = new EventEmitter<boolean>();
  private signupFormBuilderService = inject(UntypedFormBuilder);
  private accountService = inject(AccountService); 

  signUpForm = this.signupFormBuilderService.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required]
  })

  register (): void {
    //console.table(this.signUpForm.value);
    this.accountService.resgister(this.signUpForm.value).subscribe({
      next: () => {
          window.alert("Você foi registrado com sucesso");
          this.toggleToLogin.emit(false);
      },
      error: (error) => {
        window.alert(JSON.stringify(error.error.error));
        this.signUpForm.reset();
      }
    });
    
  }
}

