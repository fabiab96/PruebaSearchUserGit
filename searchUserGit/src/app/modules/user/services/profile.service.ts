import { Injectable } from '@angular/core';
import { AppResponseService } from '../../../core/services/app-response.service';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends AppResponseService<Profile> {
  constructor() {
    super();
  }

  // Es mejor pasar la url por una fichero de configuración (config.json) o enviroments
  changeProfile = (profile: string) =>
    this.url.set(`https://api.github.com/users/${profile}`);
}
