import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';

import { NuiFormFieldModule } from 'components';

@Component({
  selector: 'app-form-field-table',
  standalone: true,
  imports: [
    MatIcon,
    NuiFormFieldModule
  ],
  templateUrl: './form-field-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldTableComponent {

}
