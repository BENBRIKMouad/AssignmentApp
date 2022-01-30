import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [
    {
      id:1,
      name: "devoir ang",
      description: "Vous devrez modifier le projet pour ajouter certaines des fonctionnalités suivantes (pas besoin de tout faire sauf si vous êtes super forts :-)",
      dueDate: new Date("1/31/20"),
      returned: true
    },
    {
      id:2,
      name: "devoir bd",
      description: "voila une petite description sur ce que il faut faire dans ce devoir",
      dueDate: new Date("2/25/22"),
      returned: false
    },
    {
      id:3,
      name: "devoir groovy",
      description: "",
      dueDate: new Date("3/25/98"),
      returned: false
    },
  ]
  getAssignments():Observable<Assignment[]>{
    return  of(this.assignments)
  }
  getAssignment(id:number):Observable<Assignment|undefined>{
    let assignment;
    assignment = this.assignments.find(a=>a.id ===id)
    return  of(assignment)
  }
 
  AddAssignment(assignment: Assignment):Observable<string>{
    this.assignments.push(assignment)
    return  of('Assignment "' + assignment.name + '" has been added successfully!!')
  }
  returnAssignment(assignment: Assignment):Observable<string>{
    const index = this.assignments.indexOf(assignment);
    this.assignments[index].returned = true;
    return  of('Assignment "' + assignment.name + '" has been returned successfully!!')
  }
  updateAssignment(assignment: Assignment):Observable<string>{

    return  of('Assignment "' + assignment.name + '" has been updated successfully!!')
  }
  deleteAssignment(assignment: Assignment):Observable<string>{
    const index = this.assignments.indexOf(assignment);
    this.assignments.splice(index, 1);
    return  of('Assignment "' + assignment.name + '" has been removed successfully!!')
  }
  constructor() { }
}
