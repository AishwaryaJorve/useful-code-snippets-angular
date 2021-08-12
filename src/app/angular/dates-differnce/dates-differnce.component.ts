/**
 * @author AishwaryaJorve
 *
 *
 *
 * let datedStr ="06/30/2019 - 07/30/2019"
 * let dateStr = "06/01/2020 - 09/01/2020";
 * let dateStr = "08/11/2021 - 08/11/2021";
 * let dateStr = "08/11/2021 - 08/16/2021";
 * let dateStr = "PRESENT - PRESENT";
 * let dateStr = null;
 * let dateStr = "08/12/2021 - 08/15/2021; 08/01/2021 - 09/12/2021";
 * let dateStr = "11/15/2011 - PRESENT; 03/22/2012 - PRESENT";
 * let dateStr = "PRESENT - PRESENT; PRESENT - PRESENT";
 */

import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-dates-differnce",
	templateUrl: "./dates-differnce.component.html",
	styleUrls: ["./dates-differnce.component.css"],
})
export class DatesDiffernceComponent implements OnInit {
	constructor(private datePipe: DatePipe) { }

	ngOnInit() { }

	onClick() {
		let finalString: string = "";
		let strSplitBySemicoln: any;
		let dayArray: any[] = [];
		let strSplitByDash: any;
		let currentDate: any;
		let date1: any;
		let date2: any;
		// Date formate mm/dd/yyyy

		let dateStr = "11/15/2011 - 03/06/2012; PRESENT - PRESENT";

		if (dateStr != null) {
			strSplitBySemicoln = dateStr.split("; ");
			console.log(strSplitBySemicoln);
			strSplitBySemicoln.map((e) => {
				if (e.includes("PRESENT")) {
					strSplitByDash = e.split(" - ");

					if (
						strSplitByDash[0] == "PRESENT" &&
						strSplitByDash[1] == "PRESENT"
					) {
						console.log("both dates are PRESENT");
						let days = 0;
						dayArray.push(days);
					} else {
						console.log(strSplitByDash, " split by dash - one present ");
						date1 = new Date(strSplitByDash[0]);
						currentDate = new Date();

						currentDate = this.datePipe.transform(currentDate, "MM/dd/yyyy");
						date2 = new Date(currentDate);

						//time between two dates
						let Difference_In_Time = date2.getTime() - date1.getTime();
						//  no. of days between two dates
						let days = Difference_In_Time / (1000 * 3600 * 24);
						// console.log(days);
						dayArray.push(days);
					}
				} else {
					strSplitByDash = e.split("-");
					date1 = new Date(strSplitByDash[0]);
					date2 = new Date(strSplitByDash[1]);

					//time between two dates
					let Difference_In_Time = date2.getTime() - date1.getTime();
					//  no. of days between two dates
					let days = Difference_In_Time / (1000 * 3600 * 24);
					dayArray.push(days);
				}
			});

			dayArray.map((e, index1) => {
				let element = e;
				if (index1 == dayArray.length - 1) {
					finalString = finalString.concat(element, " Days");
				} else {
					finalString = finalString.concat(element, " ; ");
				}
			});

			console.log("final output......... ", finalString);
		} else {
			console.log("string is null");
		}
	}
}
