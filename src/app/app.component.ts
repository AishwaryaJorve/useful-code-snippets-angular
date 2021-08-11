import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'amexio-demo';
	date: string = "08/01/2020 - 09/01/2020"
	dateStringArray: string[];


	constructor() {

	}

	ngOnInit() {
		if (window.performance) {
			console.info("window.performance work's fine on this browser");
		}
		if (performance.navigation.type == 1) {
			console.info("This page is reloaded");
		} else {
			console.info("This page is not reloaded");
		}

	}
}

























































