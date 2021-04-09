import {Subject} from 'rxjs';

export const AMOUNT_TOTAL = 100;
export const WIN_CONDITION = 10;

export interface Cell {
  id: number;
  status: boolean;
  onActivated$: Subject<boolean>;
}
