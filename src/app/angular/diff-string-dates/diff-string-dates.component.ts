
/**
 * @author AishwaryaJorve
 * "08/01/2020 - 09/01/2020" Find difference between this tow string which is at sart in same string first need
 *  split after that convert into Date .....
 */



import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-diff-string-dates',
	templateUrl: './diff-string-dates.component.html',
	styleUrls: ['./diff-string-dates.component.css']
})
export class DiffStringDatesComponent implements OnInit {

	date: string = "08/01/2020 - 09/01/2020"
	dateStringArray: string[];

	constructor() { }

	onClick() {
		let startDate: Date;
		let endDate: Date;
		let differnceInTime: any
		let days: number;
		this.dateStringArray = this.date.split(" - ");
		console.log(this.dateStringArray);

		startDate = new Date(this.dateStringArray[0]);
		endDate = new Date(this.dateStringArray[1]);

		// first find difference of time in two dates
		differnceInTime = endDate.getTime() - startDate.getTime();

		days = differnceInTime / (1000 * 3600 * 24);
		console.log(days);
	}

	ngOnInit() {
	}

}
