import { Component, signal } from '@angular/core'
import { IceCreamComponent } from './ice-cream/ice-cream.component'

@Component({
  selector: 'app-root',
  imports: [IceCreamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  quantity = signal(1)
  flavour = signal('#5B2F00')
  size = signal(150)
  napkin = signal(true)
}
