import { Injectable } from '@angular/core';
import { BehaviorSubject } from '@reactivex/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['This is 1', 'This is 2']);
  goal = this.goals.asObservable();

  constructor() { }
    changeGoal(goal){
    this.goals.next(goal);
    }
}
