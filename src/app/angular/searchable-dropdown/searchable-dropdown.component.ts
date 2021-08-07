import { Component, OnInit } from '@angular/core';

@Component({
	selector: "app-searchable-dropdown",
	templateUrl: "./searchable-dropdown.component.html",
	styleUrls: ["./searchable-dropdown.component.css"],
})
export class SearchableDropdownComponent implements OnInit {
  dropmodel: dropDownModel;
  constructor() {
    this.dropmodel = new dropDownModel();
  }
  selectedValueName: string = "";
  selectedValueNumber: number = 0;
  selectedObject: dropDownModel;

  response = {
    success: true,
    message: {
      displayMessage: "Docuement Types Retrieved Successfully",
      code: "CUSTX_VERIFICATION_1000",
      htmlMessage:
        "<table border=0><tr><td><b>Error Code:</b></td><td>CUSTX_VERIFICATION_1000</td></tr><tr><td><b>Category:</b></td><td>NA</td></tr><tr><td><b>Message:</b></td><td>Docuement Types Retrieved Successfully</td></tr><tr><td><b>Application:</b></td><td>NA</td></tr></table>",
      categoryId: 4,
      category: "NA",
      fieldError: [],
    },
    data: [
      {
        DOCUMENT_TYPE_ID: 1,
        DOCUMENT_TYPE_DESC: "Application/New Request",
        DISPLAY_NAME: "Application/New Request",
      },
      {
        DOCUMENT_TYPE_ID: 2,
        DOCUMENT_TYPE_DESC: "Authorization/Release",
        DISPLAY_NAME: "Authorization/Release",
      },
      {
        DOCUMENT_TYPE_ID: 3,
        DOCUMENT_TYPE_DESC: "Court Copies",
        DISPLAY_NAME: "Court Copies",
      },
      {
        DOCUMENT_TYPE_ID: 4,
        DOCUMENT_TYPE_DESC: "Degree",
        DISPLAY_NAME: "Degree",
      },
      {
        DOCUMENT_TYPE_ID: 5,
        DOCUMENT_TYPE_DESC: "Driver License",
        DISPLAY_NAME: "Driver License",
      },
      {
        DOCUMENT_TYPE_ID: 6,
        DOCUMENT_TYPE_DESC: "Education - Diploma",
        DISPLAY_NAME: "Education - Diploma",
      },
      {
        DOCUMENT_TYPE_ID: 7,
        DOCUMENT_TYPE_DESC: "Education - MarkSheet",
        DISPLAY_NAME: "Education - MarkSheet",
      },
      {
        DOCUMENT_TYPE_ID: 8,
        DOCUMENT_TYPE_DESC: "Education - Transcript",
        DISPLAY_NAME: "Education - Transcript",
      },
      {
        DOCUMENT_TYPE_ID: 9,
        DOCUMENT_TYPE_DESC: "Employment Verification Letter",
        DISPLAY_NAME: "Employment Verification Letter",
      },
      {
        DOCUMENT_TYPE_ID: 10,
        DOCUMENT_TYPE_DESC: "International Document",
        DISPLAY_NAME: "International Document",
      },
    ],
  };

	ngOnInit() { }

  /**
   *
   * @param event
   */
  seletedname: string;
	myFunction(event: any) {
		console.log(event, ".......... name from event");
		//get whole selected object for fetching DOCUMENT_TYPE_ID by its DISPLAY_NAME
		this.selectedObject = this.response.data.find(
			(element) => element.DISPLAY_NAME == event
		);

		if (this.selectedObject || this.selectedObject !== undefined) {
			//get DOCUMENT_TYPE_ID
			this.selectedValueNumber = 0;
			this.selectedValueNumber = this.selectedObject.DOCUMENT_TYPE_ID;
			this.selectedValueName = this.selectedObject.DISPLAY_NAME;
		} else {
			this.selectedValueNumber = 0;
			alert("Display Name Not found");
			console.log("Data not found");
		}
		console.log(this.selectedValueName, "name");
		console.log(this.selectedValueNumber, "id");
		console.log(this.selectedObject, "   selected object");
	}
}
export class dropDownModel {
  "DOCUMENT_TYPE_ID": number = null;
  "DOCUMENT_TYPE_DESC": string = "";
  "DISPLAY_NAME": string = "";
}