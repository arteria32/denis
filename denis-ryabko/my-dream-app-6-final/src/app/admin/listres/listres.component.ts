import {Component, Input, OnInit} from '@angular/core';
import {ResDataService} from "../../services/res-data.service";

@Component({
  selector: 'app-listres',
  templateUrl: './listres.component.html',
  styleUrls: ['./listres.component.scss']
})
export class ListresComponent implements OnInit {
  constructor(public resDataService:ResDataService){}
  ngOnInit(): void {
  }

  SwapSelectedRes(num:number){
    this.resDataService.selectedRes=num;
  }
}
