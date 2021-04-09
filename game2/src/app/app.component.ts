import {Component, OnInit} from '@angular/core';
import {WIN_CONDITION} from './interface/game';
import {GameService} from './service/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  usScore = 0;
  check = 0;
  pcScore = 0;
  interval = 1000;
  winCondition = WIN_CONDITION;

  constructor( public gameController: GameService) {
  }

  ngOnInit(): void {
    this.gameController.playerScore$.subscribe(score => { this.usScore = score; this.reset(score); });
    this.gameController.computerScore$.subscribe(score => { this.pcScore = score; this.reset(score); });
  }
  checkInterval(): void {
    this.interval = +this.interval;
    if ( this.interval <= this.check) {
      this.gameController.isShowPopupCheck = true;
      this.interval = 1000;
    } else if (this.interval > 0) {
      this.start();
    }
  }

  start(): void {
    this.clearField();
    this.gameController.start(this.interval);
    this.usScore = 0;
    this.pcScore = 0;
    this.gameController.isGameProceed = true;
  }

  clearField(): void {
    if (this.usScore !== 0 || this.pcScore !== 0) {
      this.gameController.field$.next();
    }
  }

  reset(score): void {
    if (score === this.winCondition) {
      this.gameController.isGameProceed = false;
      this.gameController.isShowPopup = true;
      this.gameController.checkWinner(this.usScore, this.pcScore);
    }
  }

  onKey(event: any): void {
    this.interval = event.target.value;
  }
}
