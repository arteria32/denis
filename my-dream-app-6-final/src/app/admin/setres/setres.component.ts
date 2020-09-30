import { Component, OnInit } from '@angular/core';
import {ResDataService, Reservoir} from "../../services/res-data.service";

@Component({
  selector: 'app-setres',
  templateUrl: './setres.component.html',
  styleUrls: ['./setres.component.scss']
})
export class SetresComponent implements OnInit {
  constructor(public resDataService:ResDataService){}
  ngOnInit(): void {
  }
}
