import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fabImgAvatar]',
  standalone: true,
})
export class ImgAvatarDirective {
  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.borderRadius = '50%';
  }
}
