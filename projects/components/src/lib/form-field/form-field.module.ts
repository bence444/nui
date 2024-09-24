/* 3rd party packages */
import { NgModule } from '@angular/core';

/* local code */
import { NuiFormFieldComponent } from './form-field.component';
import { NuiInputDirective } from './input.directive';

@NgModule({
  imports: [
    NuiFormFieldComponent,
    NuiInputDirective
  ],
  exports: [
    NuiFormFieldComponent,
    NuiInputDirective
  ]
})
export class NuiFormFieldModule { }
