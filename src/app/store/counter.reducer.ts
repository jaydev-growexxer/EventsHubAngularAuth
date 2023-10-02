import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.action';

const initialState: number = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (step: number) => step + 1)
);

// // Another way to create reducer
// export function counterReducer (state = initialState) {
//     return state;
// }
