import { Component, model } from '@angular/core'
import { IceCreamComponent } from './ice-cream/ice-cream.component'

@Component({
  selector: 'app-root',
  imports: [IceCreamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  quantity = model(1)
  flavour = model('#5B2F00')
  size = model(150)
  napkin = model(true)
}
