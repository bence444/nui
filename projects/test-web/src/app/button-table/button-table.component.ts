import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

import {
  ComponentColor,
  NuiButtonComponent
} from 'components';

@Component({
  selector: 'app-button-table',
  standalone: true,
  imports: [
    NuiButtonComponent,
    MatIcon
  ],
  templateUrl: './button-table.component.html',
  host: {
    class: 'bg-transparent'
  }
})
export class ButtonTableComponent {

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
