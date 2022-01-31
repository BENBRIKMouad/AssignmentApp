import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AssignmentsService } from '../shared/assignments.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})

export class AssignmentsComponent implements OnInit {
  title:string = "List of assignments"
  gridColumns: number = 2;
  months: any = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  currentDate = new Date();
  durationInSeconds = 3;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  assignments: Assignment[] = []
  constructor(private _snackBar: MatSnackBar, private assignmentsService: AssignmentsService,private router:Router,private authService:AuthService) { }
  ngOnInit(): void {
    this.assignmentsService.getAssignments()
      .subscribe(assignments => {
        this.assignments = assignments;
      });

  }

  returnAssignment(assignment: Assignment) {
    this.assignmentsService.returnAssignment(assignment).subscribe(reponse=>{
      this._snackBar.open(reponse.message, 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
    })
  }

  onRemove(assignment: Assignment) {
    this.assignmentsService.deleteAssignment(assignment).subscribe(reponse=>{
      this._snackBar.open(reponse.message, 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
      this.assignmentsService.getAssignments()
      .subscribe(assignments => {
        this.assignments = assignments;
      });
    })
  }
  onEdit(assignment: Assignment) {
    this.router.navigate([`/assignment/${assignment.id}/edit`])
  }
  isAdmin(){
    return this.authService.loggedIn
  }
}
