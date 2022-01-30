import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.scss']
})
export class AddAssignmentComponent implements OnInit {
  name: string = ""
  dueDate!: Date;
  description!:string
  @Output() addAssignment = new EventEmitter<Assignment>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event: Event) {
    let newAssignment = new Assignment();
    newAssignment.dueDate = this.dueDate;
    newAssignment.name = this.name;
    newAssignment.description = this.description
   // this.assignments.push(newAssignment);
   this.addAssignment.emit(newAssignment)
  }

}
