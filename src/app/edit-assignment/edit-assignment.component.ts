import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../assignments/assignment.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.scss']
})
export class EditAssignmentComponent implements OnInit {
  assignment?:Assignment;
  name?:string;
  dueDate?:Date;
  description?:string;
  constructor(private route:ActivatedRoute, private assignmentsService:AssignmentsService,private router:Router) { }

  ngOnInit(): void {
    const id:number= +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id).subscribe(assignment => {
      this.assignment = assignment;
      this.name = assignment?.name;
      this.description = assignment?.description;
      this.dueDate = assignment?.dueDate;
    })
  }
  onSaveAssignment(){
    if(!this.assignment) return;
    if(this.name)
    this.assignment.name = this.name;

    if(this.description)
    this.assignment.description = this.description;

    if(this.dueDate)
    this.assignment.dueDate = this.dueDate

    this.assignmentsService.updateAssignment(this.assignment).subscribe(message => {
      this.router.navigate(['/home'])
    })

  }
}
