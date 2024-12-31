import { Component } from '@angular/core'
import { IceCreamComponent } from './ice-cream/ice-cream.component'

@Component({
  selector: 'app-root',
  imports: [IceCreamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  quantity = 1
  flavour = '#5B2F00'
  size = 150
  napkin = true
}
