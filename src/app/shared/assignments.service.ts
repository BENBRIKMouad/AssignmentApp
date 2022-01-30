import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [
    {
      name: "devoir ang",
      description: "Vous devrez modifier le projet pour ajouter certaines des fonctionnalités suivantes (pas besoin de tout faire sauf si vous êtes super forts :-)",
      dueDate: new Date("1/31/20"),
      returned: true
    },
    {
      name: "devoir bd",
      description: "voila une petite description sur ce que il faut faire dans ce devoir",
      dueDate: new Date("2/25/22"),
      returned: false
    },
    {
      name: "devoir groovy",
      description: "",
      dueDate: new Date("3/25/98"),
      returned: false
    },
  ]
  getAssignment():Observable<Assignment[]>{
    return  of(this.assignments)
  }
  AddAssignment(assignment: Assignment):Observable<string>{
    this.assignments.push(assignment)
    return  of('Assignment "' + assignment.name + '" has been added successfully!!')
  }
  UpdateAssignment(assignment: Assignment):Observable<string>{
    const index = this.assignments.indexOf(assignment);
    this.assignments[index].returned = true;
    return  of('Assignment "' + assignment.name + '" has been updated successfully!!')
  }
  DeleteAssignment(assignment: Assignment):Observable<string>{
    const index = this.assignments.indexOf(assignment);
    this.assignments.splice(index, 1);
    return  of('Assignment "' + assignment.name + '" has been removed successfully!!')
  }
  constructor() { }
}
