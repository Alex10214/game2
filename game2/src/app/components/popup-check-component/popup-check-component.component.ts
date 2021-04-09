import { Component, OnInit } from '@angular/core';
import {GameService} from '../../service/game.service';

@Component({
  selector: 'app-popup-check-component',
  templateUrl: './popup-check-component.component.html',
  styleUrls: ['./popup-check-component.component.scss']
})
export class PopupCheckComponentComponent implements OnInit {

  constructor(private gameController: GameService ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.gameController.isShowPopupCheck = false;
    this.gameController.createField(this.gameController.cells);
  }
}
