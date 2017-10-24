import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  attri= [
    {
      "attrId": "field001",
      "attrName": "field_01",
      "lblName": "Field-01",
      "fieldType": "TXT",
      "attrValue": "field Value -01",
      "attrPermission": "E",
      "isRequired": "Y",
      "comboValueMap": null
    },
    {
      "attrId": "field002",
      "attrName": "field_02",
      "lblName": "Field-02",
      "fieldType": "CMB",
      "attrValue": "field Value -02",
      "attrPermission": "E",
      "isRequired": "Y",
      "comboValueMap": [
        "Open - Not Contacted",
         "Working - Contacted",
         "Closed - Converted",
        "Closed - Not Converted",
         "Closed - Unable to Contact",
         "Disqualified",
         "Suspect"
      ]
    },
    {
      "attrId": "field003",
      "attrName": "field_03",
      "lblName": "Field-03",
      "fieldType": "CHK",
      "attrValue": "Y",
      "attrPermission": "E",
      "isRequired": "N",
      "comboValueMap": null
    },
    {
      "attrId": "field004",
      "attrName": "field_04",
      "lblName": "Field-04",
      "fieldType": "TXA",
      "attrValue": "field Value -04",
      "attrPermission": "E",
      "isRequired": "N",
      "comboValueMap": null
    },
    {
      "attrId": "field005",
      "attrName": "field_05",
      "lblName": "Field-05",
      "fieldType": "RDO",
      "attrValue": "Y",
      "attrPermission": "E",
      "isRequired": "N",
      "comboValueMap": null
    },

  ];
  constructor(public navCtrl: NavController) {

  }
  printconsole(data)
  {
    console.log("Hello");
    console.log("data" + data);
  }
}
