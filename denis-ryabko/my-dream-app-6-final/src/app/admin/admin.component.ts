import { Component, OnInit } from '@angular/core';
import {ResDataService} from "../services/res-data.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(public resDataService:ResDataService) { }
  delcur=1;
  ngOnInit(): void {
  }
  AddRes(){
    let L=this.resDataService.reservoirs.length;
    this.resDataService.selectedRes=L+this.delcur;
    this.resDataService.reservoirs.push(
      {maxmass:1000, num:L+this.delcur, type: 'АИ-92', mass:0, lock:false})
  }
  DelRes(){
    this.resDataService.reservoirs.splice(this.resDataService.selectedRes-this.delcur,1)
    this.delcur+=1;
    this.resDataService.selectedRes+=1;
  }

}
