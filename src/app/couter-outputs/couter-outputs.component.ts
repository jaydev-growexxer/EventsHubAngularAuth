import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-couter-outputs',
  templateUrl: './couter-outputs.component.html',
  styleUrls: ['./couter-outputs.component.scss'],
})
export class CouterOutputsComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }
}
