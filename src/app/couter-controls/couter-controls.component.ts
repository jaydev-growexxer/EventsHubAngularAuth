import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../store/counter.action';

@Component({
  selector: 'app-couter-controls',
  templateUrl: './couter-controls.component.html',
  styleUrls: ['./couter-controls.component.scss'],
})
export class CouterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {}
}
