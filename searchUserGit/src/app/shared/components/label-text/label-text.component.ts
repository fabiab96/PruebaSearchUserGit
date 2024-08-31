import { Component, input } from '@angular/core';

@Component({
  selector: 'fab-label-text',
  standalone: true,
  imports: [],
  templateUrl: './label-text.component.html',
  styleUrl: './label-text.component.css',
})
export class LabelTextComponent {
  label = input('');
  text = input<string | number | Date | null | undefined>('');
}
