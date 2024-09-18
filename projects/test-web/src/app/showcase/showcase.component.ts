import {
  Component,
  inject,
  input
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { NuiFormFieldComponent } from '../../../../components/src/lib/nui-form-field/nui-form-field.component';
import { NuiLabelComponent } from '../../../../components/src/lib/nui-form-field/nui-label.component';
import { NuiInputComponent } from '../../../../components/src/lib/nui-input/nui-input.component';
import { NuiInputDirective } from '../../../../components/src/lib/nui-input/nui-input.directive';
import { NuiInputIconComponent } from '../../../../components/src/lib/nui-input/nui-input-icon.component';
import { NuiSelectComponent } from '../../../../components/src/lib/nui-select/nui-select.component';
import { NuiOptionComponent } from '../../../../components/src/lib/nui-select/nui-option.component';
import { NuiCheckboxComponent } from '../../../../components/src/lib/checkbox/checkbox.component';
import { NuiButtonComponent } from '../../../../components/src/lib/button/button.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    NuiButtonComponent,
    NuiFormFieldComponent,
    NuiLabelComponent,
    NuiInputComponent,
    NuiInputDirective,
    NuiInputIconComponent,
    NuiSelectComponent,
    NuiOptionComponent,
    NuiCheckboxComponent
  ],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {

  private _formBuilder = inject(FormBuilder);
  formGroup = this._formBuilder.group({
    category1: new FormControl(),
    category2: new FormControl()
  });

  light = input<boolean>(false);

}
