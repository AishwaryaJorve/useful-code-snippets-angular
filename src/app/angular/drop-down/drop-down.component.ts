import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  constructor() { }


  selectedName = ["Aishwarya", "Shubhangi", "Mahesh"];

  ngOnInit() {
  }

  myFunction(name) {
    console.log("hi", name)
  }
}
