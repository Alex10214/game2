import { Injectable } from '@angular/core';
import {Observable, Subject, Subscription, timer} from 'rxjs';
import {AMOUNT_TOTAL, Cell, WIN_CONDITION} from '../interface/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  period = 0;
  usScore = 0;
  pcScore = 0;
  playerScore$ = new Subject<number>();
  computerScore$ = new Subject<number>();
  field$: Subject<any> = new Subject<any>();
  timer$: Observable<number> = new Observable<number>();
  cells: Cell[];
  sub: Subscription;
  winner = null;
  isGameProceed = false;
  isShowPopup = false;
  isShowPopupCheck = false;

  constructor() {
  }

  init(cells: Cell[]): void {
  this.cells = cells;
  }

  createField(cells: Cell[]): void {

    for (let i = 0; i < this.cells.length; i++) {
      cells[i] = {
        onActivated$: new Subject<boolean>(),
        status: false,
        id: i
      };
    }
    this.init(this.cells);
  }

  start(interval): void {
    this.period = interval;
    this.usScore = 0;
    this.pcScore = 0;
    this.initInterval();
  }

  initInterval(): void {
    this.timer$ = timer(0, this.period);
    this.sub = this.timer$.subscribe(() => this.activateRandomCell());
  }

  activateRandomCell(): void {
    const randomValue = Math.floor(Math.random() * AMOUNT_TOTAL);
    let found = false;

    this.sub.unsubscribe();

    do {
      if (!this.cells[randomValue].status) {
        this.cells[randomValue].status = true;

        this.cells[randomValue].onActivated$.next(true);
      } else {
        this.activateRandomCell();
      }

      found = true;
    } while (!found);
  }

  callbackFromRandomCell(isPlayerWin): void {
    if (isPlayerWin) {
      this.setScoreToPlayer();
    } else {
      this.setScoreToComputer();
    }

    if (this.usScore < WIN_CONDITION && this.pcScore < WIN_CONDITION) {
      this.initInterval();
    }
  }

  setScoreToPlayer(): void {
    this.usScore++;
    this.playerScore$.next(this.usScore);
  }

  setScoreToComputer(): void {
    this.pcScore++;
    this.computerScore$.next(this.pcScore);
  }

  checkWinner(us, pc): boolean {
    if (us >= WIN_CONDITION) {
      return this.winner = false;
    }
    if (pc >= WIN_CONDITION) {
      return this.winner = true;
    }
  }

}
