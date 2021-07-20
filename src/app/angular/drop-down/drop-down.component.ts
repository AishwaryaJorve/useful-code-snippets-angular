import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  constructor() { }


  selectedName = ["Aishwarya", "Shubhangi", "Mahesh"];

  ngOnInit() {
    // localStorage.setItem("aishwarya", "HEllo");
  }

  myFunction(name) {
    console.log("hi", name)
  }
}
