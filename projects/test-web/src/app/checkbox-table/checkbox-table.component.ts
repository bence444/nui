import { Component } from '@angular/core';

import {
  ComponentColor,
  NuiCheckboxComponent,
} from 'components';

@Component({
  selector: 'app-checkbox-table',
  standalone: true,
  imports: [NuiCheckboxComponent],
  templateUrl: './checkbox-table.component.html'
})
export class CheckboxTableComponent {

  readonly colors: ComponentColor[] = [
    'default',
    'orange',
    'blue',
    'azure',
    'green',
    'lime',
    'red',
    'yellow'
  ];

}
