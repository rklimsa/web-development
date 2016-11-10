    import { Component } from '@angular/core';
	import { TimeService } from './../../services/timeservice/TimeService';

    @Component({
      selector: 'video-component',
      templateUrl: '/app/components/video/video.html',
	  providers: [TimeService]
    })
    export class VideoComponent {
		
		time;
		
		constructor(private timeService : TimeService) {
			this.time = timeService.actualTime();
		}
	
	}