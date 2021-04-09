import {Component, OnInit} from '@angular/core';
import {GameService} from '../../service/game.service';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.scss']
})
export class PopupComponentComponent implements OnInit {

  checkWin = null;
  pcScore = 0;
  usScore = 0;

  constructor(private gameController: GameService ) {
  }


  ngOnInit(): void {
    this.checkWin = this.gameController.winner;
    this.pcScore = this.gameController.pcScore;
    this.usScore = this.gameController.usScore;
  }

  close(): void {
    this.gameController.isShowPopup = false;
    this.gameController.createField(this.gameController.cells);
  }
}
