import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../services/account.service';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  accountData!:{accessToken: string};
  accountService = inject(AccountService);

  longinFormBuilderService = inject(UntypedFormBuilder);
  loginForm = this.longinFormBuilderService.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  login ():void {
     this.accountService.login(this.loginForm.value).subscribe({
      next: (data) => { 
        console.log(data);
      }
    })
  }

}
