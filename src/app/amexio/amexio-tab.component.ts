import {
    Component,
    OnInit,
} from "@angular/core";

@Component({
    selector: "amexio-tab",
    templateUrl: "./amexio-tab.component.html",
    styleUrls: ["./amexio-tab.component.css"],
})
export class AmexioTabComponent implements OnInit {
    testData = [
        {
            name: "Aishwaryajkhghghjhkj",
            midname: "Ravindrall",
            sirname: "Jorve",
        },
        {
            name: "monalioiouiiuiuiui",
            midname: "midNamepoiouiyy",
            sirname: "kad",
        },
        {
            name: "Mahesh",
            midname: "FatherName",
            sirname: "Bansode",
        },
        {
            name: "Shubhangi",
            midname: "Babanrao",
            sirname: "Dongare",
        },
    ];

    ngOnInit() {

    }

}
