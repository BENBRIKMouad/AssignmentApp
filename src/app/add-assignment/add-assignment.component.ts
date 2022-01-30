import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Assignment } from '../assignments/assignment.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.scss']
})
export class AddAssignmentComponent implements OnInit {
  title:string = "Add assignment"
  name: string = ""
  dueDate!: Date;
  description!:string;
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  @Output() addAssignment = new EventEmitter<Assignment>();
  constructor(private router:Router, private assignmentsService: AssignmentsService,private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }
  onSubmit(event: Event) {
    let newAssignment = new Assignment();
    newAssignment.dueDate = this.dueDate;
    newAssignment.name = this.name;
    newAssignment.description = this.description;
    newAssignment.id = Math.round(Math.random() * 100000);

    this.assignmentsService.AddAssignment(newAssignment).subscribe(message=>{
      this._snackBar.open(message, 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
    })
   // this.assignments.push(newAssignment);
   this.addAssignment.emit(newAssignment);
   this.router.navigate(['home']);
  }
}
