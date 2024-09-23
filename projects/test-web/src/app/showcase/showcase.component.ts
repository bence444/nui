import {
  Component,
  input
} from '@angular/core';

import { ButtonTableComponent } from '../button-table/button-table.component';
import { CheckboxTableComponent } from '../checkbox-table/checkbox-table.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    ButtonTableComponent,
    CheckboxTableComponent
  ],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {

  light = input<boolean>(false);

}
