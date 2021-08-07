
/**
 * @author AishwaryaJorve
 * push value from each object of event array in another array
 * this will be like 
 * ["Contact Search", "Create Note", "Owner Search", "PSAN", "PSAN,E", "SR Creation", "SR Requests", "SR Search"]
 * 
 * and convert it like
 * Contact Search,Create Note,Owner Search,PSAN,PSAN,E,SR Creation,SR Requests,SR Search
 */


import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-array-to-str',
	templateUrl: './array-to-str.component.html',
	styleUrls: ['./array-to-str.component.css']
})
export class ArrayToStrComponent implements OnInit {

	event = [
		{ key: "SIEBEL_104", value: "Contact Search", index: "dropdown_reqTypelistitem0", checked: true },
		{ key: "SIEBEL_109", value: "Create Note", index: "dropdown_reqTypelistitem1", checked: true },
		{ key: "SIEBEL_103", value: "Owner Search", index: "dropdown_reqTypelistitem5", checked: true },
		{ key: "SIEBEL_105", value: "PSAN", index: "dropdown_reqTypelistitem6", checked: true },
		{ key: "SIEBEL_111", value: "PSAN,E", index: "dropdown_reqTypelistitem7", checked: true },
		{ key: "SIEBEL_106", value: "SR Creation", index: "dropdown_reqTypelistitem8", checked: true },
		{ key: "SIEBEL_108", value: "SR Requests", index: "dropdown_reqTypelistitem9", checked: true },
		{ key: "SIEBEL_101", value: "SR Search", index: "dropdown_reqTypelistitem10", checked: true }]

	arrayValueToString = [];
	requestType: string;
	constructor() { }

	ngOnInit() {
	}

	onClick() {
		this.arrayValueToString = [];
		console.log(this.arrayValueToString);

		// push value from array object into arrayValueToString
		this.event.map((item) => {
			this.arrayValueToString.push(item.value);
		});
		console.log(this.arrayValueToString);

		// arrayValueToString is array convert it into string
		this.requestType = this.arrayValueToString.toString();
		console.log(this.requestType);
	}

}
