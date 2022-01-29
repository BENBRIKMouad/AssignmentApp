import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  title = "list of assignments";
  gridColumns = 2;
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  currentDate = new Date();
  assignments = [
    {
      name: "devoir ang",
      descriptions: "Vous devrez modifier le projet pour ajouter certaines des fonctionnalités suivantes (pas besoin de tout faire sauf si vous êtes super forts :-)",
      dueDate: new Date("1/31/20"),
      returned : true
    },
    {
      name: "devoir bd",
      descriptions :"voila une petite description sur ce que il faut faire dans ce devoir",
      dueDate: new Date("2/25/22"),
      returned : false
    },
    {
      name: "devoir groovy",
      descriptions :"",
      dueDate: new Date("3/25/98"),
      returned : false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
