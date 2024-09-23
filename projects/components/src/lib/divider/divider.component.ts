/* 3rd party packages */
import {
  ChangeDetectionStrategy,
  Component,
  input,
  isDevMode,
  ViewEncapsulation
} from '@angular/core';

/* local code */

const styles = [];

if (isDevMode()) {
  styles.push('./divider.component.scss');
}

export type DividerOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'nui-divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html',
  styleUrls: styles,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': '_n_divider',
    '[class._n_divider-horizontal]': 'orientation() === "horizontal"',
    '[class._n_divider-vertical]': 'orientation() === "vertical"',
  }
})
export class NuiDividerComponent {

  orientation = input<DividerOrientation>('horizontal');

}
