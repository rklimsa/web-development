import { Injectable } from '@angular/core'

@Injectable()
export class TimeService {
	
	actualTime() {
		return new Date();
	}
	
}