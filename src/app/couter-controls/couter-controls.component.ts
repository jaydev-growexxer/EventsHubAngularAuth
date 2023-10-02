import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-couter-controls',
  templateUrl: './couter-controls.component.html',
  styleUrls: ['./couter-controls.component.scss'],
})
export class CouterControlsComponent {
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
