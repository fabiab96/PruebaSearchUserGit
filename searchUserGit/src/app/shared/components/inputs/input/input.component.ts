import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fab-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  onChange = (_: string) => {};
  onTouch = () => {};
  type = input<'text' | 'password'>('text');
  placeholder = input<string>('');
  value: string = '';
  isDisabled = signal<boolean>(false);

  writeValue(obj: string): void {
    this.value = obj;
    this.onChange(obj);
  }
  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.update(() => isDisabled);
  }
  change = ({ target }: any) => {
    this.onTouch();
    this.writeValue(target?.value);
  };
}
