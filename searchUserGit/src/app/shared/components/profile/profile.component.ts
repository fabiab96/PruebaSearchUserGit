import { Component, input } from '@angular/core';
import { Item } from '../../../modules/user/models/item.model';
import { ImgAvatarDirective } from '../../directives/img-avatar.directive';

@Component({
  selector: 'fab-profile',
  standalone: true,
  imports: [ImgAvatarDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  item = input<Item>({ id: 0, login: '', avatar_url: '' } as Item);
}
