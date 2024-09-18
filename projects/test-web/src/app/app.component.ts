import { Component } from '@angular/core';

import { ShowcaseComponent } from './showcase/showcase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShowcaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'test-web';

}

