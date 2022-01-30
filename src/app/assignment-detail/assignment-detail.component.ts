import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss']
})
export class AssignmentDetailComponent implements OnInit {
  panelOpenState:boolean = false;
  @Input() description:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
