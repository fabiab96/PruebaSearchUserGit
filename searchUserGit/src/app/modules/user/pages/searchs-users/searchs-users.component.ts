import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Item } from '../../models/item.model';
import { InputComponent } from '../../../../shared/components/inputs/input/input.component';
import { ButtonComponent } from '../../../../shared/components/buttons/button/button.component';
import { ProfileComponent } from '../../../../shared/components/profile/profile.component';

@Component({
  selector: 'fab-searchs-users',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    ProfileComponent,
  ],
  templateUrl: './searchs-users.component.html',
  styleUrl: './searchs-users.component.css',
})
export class SearchsUsersComponent {
  userService = inject(UserService);
  formBuilder = inject(FormBuilder);
  route = inject(Router);
  form: FormGroup = this.formBuilder.group({
    q: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    ],
  });
  usersData = signal<Array<Item>>([]);

  searchUsers = () => {
    if (this.form.valid)
      this.userService
        .get({ ...this.form.value, per_page: 10 })
        .subscribe(({ items }) => this.usersData.set(items));
    else this.form.markAllAsTouched();
  };

  navigateToProfile = (login: string) =>
    this.route.navigateByUrl(`/searchUser/profile/${login}`);
}
