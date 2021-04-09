import { Component, OnInit } from '@angular/core';
import {AMOUNT_TOTAL, Cell} from '../../interface/game';
import {GameService} from '../../service/game.service';

@Component({
  selector: 'app-screen-component',
  templateUrl: './screen-component.component.html',
  styleUrls: ['./screen-component.component.scss']
})
export class ScreenComponentComponent implements OnInit {

  cells: Cell[];

  constructor(private gameController: GameService) {

  }

  ngOnInit(): void {
    this.cells = new Array(AMOUNT_TOTAL);
    this.gameController.init(this.cells);
    this.gameController.createField(this.cells);
  }

}
