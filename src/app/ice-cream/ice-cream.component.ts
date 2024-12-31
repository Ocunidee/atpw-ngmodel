import { Component, input } from '@angular/core'

@Component({
  selector: 'app-ice-cream',
  imports: [],
  templateUrl: './ice-cream.component.html',
  styleUrl: './ice-cream.component.scss'
})
export class IceCreamComponent {
  quantity = input.required<number>()
  flavour = input.required<string>()
  size = input.required<number>()
  napkin = input.required<boolean>()
}
