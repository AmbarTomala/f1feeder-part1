import { Formula1Service } from './../formula1.service';

import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-newtabla',
  templateUrl: './newtabla.component.html',
  styleUrls: ['./newtabla.component.css']
})


export class NewtablaComponent implements OnInit {

  title = 'f1feeder-part1_5';
  listFormula1Service: any[] = [];
  textoDeInput: string;


  constructor(
    protected Formula1Servi: Formula1Service
  ) {

  }

  ngOnInit() {

    //Carga los datos de la Api de Fórmula 1
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

//Pruebas de función con un botón
  Ordenar(prop : String) {
    if(prop=="points"){
          if(document.getElementById("thpoints").className=="fa fa-sort-down"){
            document.getElementById("thpoints").className="fa fa-sort-up"

                this.listFormula1Service.sort(function(a, b) {
                return a["points"] - b["points"] ;
                });
          }else{
          this.listFormula1Service.reverse();
          document.getElementById("thpoints").className="fa fa-sort-down"
          }



    }else if(prop=="givenName"){

        if(document.getElementById("thgivenName").className=="fa fa-sort-down"){
          document.getElementById("thgivenName").className="fa fa-sort-up"

              this.listFormula1Service.sort(function(a, b) {
              return a.Driver.givenName.localeCompare(b.Driver.givenName);
              });
        }else{
        this.listFormula1Service.reverse();
        document.getElementById("thgivenName").className="fa fa-sort-down"
        }



    }else{
      if(document.getElementById("thmarca").className=="fa fa-sort-down"){
        document.getElementById("thmarca").className="fa fa-sort-up"

            this.listFormula1Service.sort(function(a, b) {
            return a.Constructors[0].name.localeCompare(b.Constructors[0].name);
            });
      }else{
      this.listFormula1Service.reverse();
      document.getElementById("thmarca").className="fa fa-sort-down"
      }

    }



  }


  //Pruebas de función con un botón
  //doFilter() {

    // let filterBy = document.getElementById("txtTexto").textContent;
      //filterBy = filterBy.toLocaleLowerCase();
      //this.listFormula1Service = this.listFormula1Service.filter((game: any) =>
      // game.Driver.givenName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  //}
}


