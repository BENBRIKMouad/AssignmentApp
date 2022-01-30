import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AssignmentsService } from '../shared/assignments.service';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})

export class AssignmentsComponent implements OnInit {
  gridColumns: number = 2;
  months: any = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  currentDate = new Date();
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  formVisible = false;

  assignments: Assignment[] = []
  constructor(private _snackBar: MatSnackBar, private assignmentsService: AssignmentsService) { }
  ngOnInit(): void {
    this.assignmentsService.getAssignment()
      .subscribe(assignments => {
        this.assignments = assignments;
      });

  }
  returnAssignment(assignment: Assignment) {
    
    this.assignmentsService.UpdateAssignment(assignment).subscribe(message=>{
      this._snackBar.open(message, 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
    })
  }
  onAddAssignmentBtn() {
    this.formVisible = true
  }
  onAddAssignment(assignment: Assignment) {
    this.assignmentsService.AddAssignment(assignment).subscribe(message=>{
      this._snackBar.open(message, 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
      this.formVisible = false;
    })
   
  }
  onRemove(assignment: Assignment) {
    this.assignmentsService.DeleteAssignment(assignment).subscribe(message=>{
      this._snackBar.open(message, 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
    })
  }

}
