
/**
 * @author AishwaryaJorve
 * To check how asych call works (Array object will go as requestJson and on each success next call 
 * depend)
 * Not Running perfectly 
 */

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-array-asynch-call',
	templateUrl: './array-asynch-call.component.html',
	styleUrls: ['./array-asynch-call.component.css']
})
export class ArrayAsynchCallComponent implements OnInit {
	responseSuccess: boolean = false;
	j: number = 0;
	array = [
		{ "success": true, "message": "Aaa", "data": "somthing" },
		{ "success": true, "message": "bb", "data": "somthing" },
		{ "success": true, "message": "cc", "data": "somthing" },
		{ "success": true, "message": "dd", "data": "somthing" }
	]

	constructor(private http: HttpClient) { }

	ngOnInit() {
	}

	onClick() {

		let i: number = 0;
		let node: any;
		let response: any;

		while (i < this.array.length && i === this.j) {
			node = this.array[i];
			this.j = i + 1;
			console.log("i value", i);
			console.log("j value", this.j);

			this.getApi(node).subscribe(
				(res) => {
					response = res;
				},
				(error) => {
					console.log(error)
				},
				() => {
					if (response.success) {
						this.responseSuccess = response.success;
						console.log(node.message);
						i++;
						console.log(i);

						// After success response of all object of array
						if (i == (this.array.length) && this.responseSuccess) {
							this.getFinal();
							return;
						}
					}
					else {
						console.log("fail")
						return;
					}
				}
			)
		}
		console.log("Done with while loop")
	}

	// Api call
	getApi(requestJson) {
		this.responseSuccess = false;
		return this.http.post("http://localhost:8080/login", requestJson);
	}

	// Call at last
	getFinal() {
		console.log("Final call after all success")
	}
}


/**
 * BackEnd code in controller for testing purpose
 */

// @PostMapping(value = "/login")
//     public ResponseEntity<FileInfo> login(@RequestBody FileInfo fileInfo) {
//         System.out.println("Done");

//         Thread t = new Thread();
//         try {
//             t.sleep(5000);
//         } catch (Exception e) {
//             System.out.println(e);
//         }
//         return new ResponseEntity<FileInfo>(fileInfo, HttpStatus.OK);
//     }


/**
 * Bean class
 */


// public class FileInfo {

// 	private boolean success;
// 	private String message;
// 	private String data;

// }