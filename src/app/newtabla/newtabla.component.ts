import { Formula1Service } from './../formula1.service';

import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-newtabla',
  templateUrl: './newtabla.component.html',
  styleUrls: ['./newtabla.component.css']
})


export class NewtablaComponent implements OnInit {

  title = 'f1feeder-part1_5';
  textoDeInput: string = ""
  listFormula1Service: any[] = [];
  constructor(
    protected Formula1Servi: Formula1Service
  ) {
  }
  ngOnInit() {
    this.Formula1Servi.getdatosFormula1()
    .subscribe(
      (data) => { // Success
        this.listFormula1Service = data['MRData'].StandingsTable.StandingsLists[0].DriverStandings;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  columnDefs = [
    {headerName: 'NombreS', field: 'name'},
    {headerName: 'Años', field: 'años'},

];
peopleByCountryGrid: any[] = [
  {
        "name": "Douglas  Pace",
        "años":15
      },
      {
        "name": "Mcleod  Mueller",
        "años":15
      },

      {
        "name": "Day  Meyers",
        "años":15
      },
      {
        "name": "Aguirre  Ellis",
        "años":25
      },
      {
        "name": "Cook  Tyson",
        "años":15
      }


];
  peopleByCountry: any[] = [
    {
      'country': 'UK',
      'people': [
        {
          "name": "Douglas  Pace",
          "años":15
        },
        {
          "name": "Mcleod  Mueller",
          "años":15
        },
      ]
    },
    {
      'country': 'US',
      'people': [
        {
          "name": "Day  Meyers",
          "años":15
        },
        {
          "name": "Aguirre  Ellis",
          "años":25
        },
        {
          "name": "Cook  Tyson",
          "años":15
        }
      ]
    }
  ];

  //driverListasPrueba: any[] = [
    //{
      //'Driver': {
       // givenName: 'Sebastian',
        //familyName: 'Vettel'
    //},
      //points: 322,
      //nationality: "German",
      //Constructors: [
        //  {name: "Red Bull"}
      //]
    //},
    //{'Driver': {
      //  givenName: 'Ambar',
        //familyName: 'Tomalá'
    //},
   // points: 322,
    //nationality: "Ecuador",
    //Constructors: [
      //  {name: "Red Bull"}
    //]
    //}
  //];
 doFilter() {

    let filterBy = document.getElementById("txtTexto").textContent;
    filterBy = filterBy.toLocaleLowerCase();
    this.listFormula1Service = this.listFormula1Service.filter((game: any) =>
        game.Driver.givenName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
}


