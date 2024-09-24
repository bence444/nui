/* 3rd party packages */
import {
  ChangeDetectionStrategy,
  Component,
  input,
  isDevMode,
  ViewEncapsulation,
} from '@angular/core';

/* local code */
import {
  ComponentDisplay,
  ComponentSize,
  DEFAULT_COMPONENT_DISPLAY,
  DEFAULT_COMPONENT_SIZE
} from '../_interfaces';

export type FormFieldAppearance = 'underlined' | 'outlined';

const styles = [];

if (!isDevMode()) {
  styles.push('./form-field.component.scss');
}

@Component({
  selector: 'nui-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrls: styles,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': '_n_form-field',
    '[class._n_form-field-rounded-auto]': '!rounded()',
    '[class._n_form-field-rounded-full]': 'rounded()',
    '[class._n_form-field-appearance-underlined]': 'appearance() === "underlined"',
    '[class._n_form-field-appearance-outlined]': 'appearance() === "outlined"',
    '[class._n_form-field-display-auto]': 'display() === "auto"',
    '[class._n_form-field-display-full]': 'display() === "block"',
    '[class._n_form-field-size-small]': 'size() === "small"',
    '[class._n_form-field-size-medium]': 'size() === "medium"',
    '[class._n_form-field-size-large]': 'size() === "large"',
  },
})
export class NuiFormFieldComponent {

  /**
   * public inputs and their private observable
   */
  rounded = input<boolean>(false);
  appearance = input<FormFieldAppearance>('outlined');

  display = input<ComponentDisplay>(DEFAULT_COMPONENT_DISPLAY);
  size = input<ComponentSize>(DEFAULT_COMPONENT_SIZE);

  /**
   * outputs
   */


  /**
   * dependency injects
   */


  /**
   * private variables and public getters
   */


  /**
   * interface implementations
   */


  /**
   * public functions
   */


  /**
   * private functions
   */

}
