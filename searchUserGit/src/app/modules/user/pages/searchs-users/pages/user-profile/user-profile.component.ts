import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../../../services/profile.service';
import { Profile } from '../../../../models/profile.model';
import { LabelTextComponent } from '../../../../../../shared/components/label-text/label-text.component';
import { DatePipe } from '@angular/common';
import { ImgAvatarDirective } from '../../../../../../shared/directives/img-avatar.directive';
import { ButtonComponent } from '../../../../../../shared/components/buttons/button/button.component';

@Component({
  selector: 'fab-user-profile',
  standalone: true,
  imports: [LabelTextComponent, DatePipe, ImgAvatarDirective, ButtonComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  profileService = inject(ProfileService);
  profile = signal<Profile | null>(null);
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ login }) => {
      this.profileService.changeProfile(login);
      this.profileService
        .get()
        .subscribe((profile) => this.profile.set(profile));
    });
  }

  return = () => this.router.navigateByUrl(`searchUser`);
}
