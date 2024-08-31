import { Injectable } from '@angular/core';
import { AppResponseService } from '../../../core/services/app-response.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends AppResponseService<User> {
  constructor() {
    super();
    // Es mejor pasar la url por una fichero de configuración (config.json) o enviroments
    this.url.set('https://api.github.com/search/users');
  }
}
