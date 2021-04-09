import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject, Subscription, timer} from 'rxjs';
import {Cell} from '../../interface/game';
import {GameService} from '../../service/game.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.scss']
})
export class GameCellComponent implements OnInit {
  click$ = new Subject();
  timer$ = new Observable();
  sub = new Subscription();
  isActivated = false;
  isPlayerWin = null;

  @Input() index: number;
  @Input() currentCell: Cell;

  constructor(private gameController: GameService) { }

  ngOnInit(): void {
    this.currentCell.onActivated$.subscribe(value => this.onActivate(value));
  }

  onActivate(isActivate): void {
    this.isActivated = isActivate;
    this.timer$ = timer(this.gameController.period).pipe(takeUntil(this.click$));

    this.sub = this.timer$.subscribe(() => this.setScore(), (e) => (console.log(e)), () => this.setScore());
  }

  onClick(): void {
    if (this.gameController.isGameProceed === true) {

      if (this.isActivated === true) {
        this.isPlayerWin = true;
        this.click$.next();
      }
    }
  }

  setScore(): void {
    this.isActivated = false;

    if (this.isPlayerWin === null) {
      this.isPlayerWin = false;
    }

    this.gameController.callbackFromRandomCell(this.isPlayerWin);
    this.sub.unsubscribe();
  }
}
