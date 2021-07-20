import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clear-model',
  templateUrl: './clear-model.component.html',
  styleUrls: ['./clear-model.component.css']
})
export class ClearModelComponent implements OnInit {

  comboCallModel: ComboCallModel;

  constructor() { this.comboCallModel = new ComboCallModel(); }

  ngOnInit() {
    this.comboCallModel = {
      candidateName: 'sdfsf',
      specimenId: 'dfsdf',
      scheduledId: 'dfsdf',
      orderId: 'sdfd',
      srPlatForm: 'fdsf',
      search: 'sdff',
      workFlow: 'dsfsf',
      srType: 'sdff',
      subCategory: 'sdff',
      primaryCategory: 'dsf',
      processingNote: 'dsffffffff',
      srDescription: ["aishi", "shubhi", "masya"],
      srSummary: ["aishi", "shubhi", "masya"],
      empdrivId: 'asdas',
    };
    console.log(this.comboCallModel);
  }

  resetModel() {
    this.comboCallModel = new ComboCallModel();
    console.log(this.comboCallModel);
  }

}

export class ComboCallModel {
  search: string;
  candidateName: string;
  workFlow: string;
  srType: string;
  primaryCategory: string;
  subCategory: string;
  srSummary: any;
  srDescription: any;
  processingNote: string;
  specimenId: string;
  orderId: string;
  srPlatForm: string;
  scheduledId: string;
  empdrivId: string;
  constructor() {
    this.candidateName = '';
    this.specimenId = '';
    this.scheduledId = '';
    this.orderId = '';
    this.srPlatForm = '';
    this.search = '';
    this.workFlow = '';
    this.srType = '';
    this.subCategory = '';
    this.primaryCategory = '';
    this.processingNote = '';
    this.srDescription = [];
    this.srSummary = [];
    this.empdrivId = '';
  }
}