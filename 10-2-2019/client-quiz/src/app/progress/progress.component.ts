import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Result } from '../model/result';
import { ResultService } from '../service/result.service';
import { Observable } from 'rxjs';
import  {Chart} from 'chart.js' 
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
public displayDate : string;
public getSessionId : string;

LineChat=[];
public testData =[];

public result : Result;
  constructor(private dataPipe : DatePipe,private resultSer : ResultService) { 
    this.result = new Result();
  }

  ngOnInit() {


    new Chart(document.getElementById("LineChart"), {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [ 
          { 
            data: [1,3,4,2,6,9,7,8],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          }, 
        ]
      },
      options:
       {
       responsive : true,
        title: {
          display: true,
          text: 'World population per region (in millions)'
        },
        scales: {
          xAxes: [{
                  display: true,
                  scaleLabel: {
                      display: true,
                      labelString: 'Month'
                  }
              }],
          yAxes: [{
                  display: true,
                  ticks: {
                      beginAtZero: true,
                      steps: 3,
                      stepValue: 1,
                      max: 20
                  }
              }]
      },
      }
    });
  }

 
  save(){
    let data = new Date();
    this.displayDate=this.dataPipe.transform(data, 'dd-MM-yyyy');
    this.getSessionId=localStorage.getItem("login");
 
    this.result.giveTestDate=this.displayDate;
    this.result.userId=2;
    this.result.sameDateTest=false;
    this.result.totalMarks=50;
   
    alert(this.result.totalMarks)
       this.resultSer.setResult(this.result).subscribe(data => {
             console.log(data)
             alert("")
       })

  }
}
 