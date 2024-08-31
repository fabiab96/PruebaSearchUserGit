import { Component, input } from '@angular/core';

@Component({
  selector: 'fab-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  text = input<string>('');
  type_style = input<'primary' | 'secondary' | 'success' | 'dark'>('primary');
  type = input<'button' | 'submit' | 'reset'>('button');
}
