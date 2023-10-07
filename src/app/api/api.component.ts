import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private _Myservice:MyserviceService) {

  }

mealarr:any[]=[]


ngOnInit(): void {
  this._Myservice.getData().subscribe(
    {next:(data)=>{(this.mealarr=data.meals)},
    error:(error)=>{alert('errror')},
    complete:()=>{console.log('hii')}

  })


}
}

