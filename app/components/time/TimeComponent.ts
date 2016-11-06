import {Component} from '@angular/core';
import {TimeService} from './../../services/timeservice/TimeService';

@Component({
  selector: 'time-component',
  providers: [TimeService],
  template: '/app/components/time/time.html'
})
export class TimeComponent {
  now = JSON.stringify(Date());
  constructor(private ts : TimeService) {
    console.log(JSON.stringify(ts));
    this.now = JSON.stringify(ts.actualTime());
  }
}