import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {ResDataService, Reservoir} from "../../../services/res-data.service";

@Component({
  selector: 'app-ressetup',
  templateUrl: './ressetup.component.html',
  styleUrls: ['./ressetup.component.scss']
})
export class RessetupComponent  implements OnInit  {
  NewMass:number;
  OldMass:number;
  PerMas:number;
  NewType:string;
  OldType:string;
  constructor(public resDataService: ResDataService) {
  }
  VidMass1='ton';
  VidMass2='per';
  selVidMass='ton';
  ngOnInit(): void {
    this.NewType=this.reservoir.type;
    this.OldType=this.reservoir.type;
    this.NewMass=this.reservoir.mass;
    this.OldMass=this.reservoir.mass;
    this.PerMas=this.reservoir.mass/this.reservoir.maxmass*100;
  }
  @Input() reservoir: Reservoir;
  swapVidToTon(){
    this.selVidMass=this.VidMass1;
  }
  swapVidToPer(){
    this.selVidMass=this.VidMass2;
  }
  AddR(){
    this.reservoir.type=this.NewType;
    this.reservoir.mass=this.NewMass;
    if (this.VidMass2==this.selVidMass){
      this.reservoir.mass=this.PerMas*this.reservoir.maxmass/100;
    }
  }
  DelR(){
    this.NewMass=this.OldMass;
    this.NewType=this.OldType;
  }

}
