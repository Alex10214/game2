import { Injectable } from '@angular/core';
import {Observable, Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  period = 0;
  usScore = 0;
  pcScore = 0;
  sub: Subscription;
  timer$: Observable<number> = new Observable<number>();
  field$: Subject<any> = new Subject<any>();

  constructor() { }
}
