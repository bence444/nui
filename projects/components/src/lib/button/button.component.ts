/* 3rd party packages */
import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewEncapsulation
} from '@angular/core';

/* local code */
import {
  ComponentColor,
  ComponentDisplay,
  ComponentSize,
  DEFAULT_COMPONENT_COLOR,
  DEFAULT_COMPONENT_DISPLAY,
  DEFAULT_COMPONENT_SIZE
} from '../_interfaces';

@Component({
  selector: 'a[nui-button], button[nui-button], span[nui-button]',
  standalone: true,
  template: '<ng-content />',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': '_n_button',
    '[class._n_button-display-auto]': 'display() === "auto"',
    '[class._n_button-display-full]': 'display() === "block"',
    '[class._n_button-size-small]': 'size() === "small"',
    '[class._n_button-size-medium]': 'size() === "medium"',
    '[class._n_button-size-large]': 'size() === "large"',
    '[class._n_button-rounded-auto]': '!rounded()',
    '[class._n_button-rounded-full]': 'rounded()',
    '[class._n_button-default]': 'color() === "default"',
    '[class._n_button-orange]': 'color() === "orange"',
    '[class._n_button-blue]': 'color() === "blue"',
    '[class._n_button-green]': 'color() === "green"',
    '[class._n_button-red]': 'color() === "red"',
    '[class._n_button-yellow]': 'color() === "yellow"',
    '[class._n_button-disabled]': 'disabled()'
  }
})
export class NuiButtonComponent {

  /**
   * public inputs and their private observable
   */
  display = input<ComponentDisplay>(DEFAULT_COMPONENT_DISPLAY);
  size = input<ComponentSize>(DEFAULT_COMPONENT_SIZE);
  color = input<ComponentColor>(DEFAULT_COMPONENT_COLOR);
  
  rounded = input<boolean>(false);
  disabled = input<boolean>(false);

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
