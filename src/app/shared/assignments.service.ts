import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  constructor(private http:HttpClient) { }
  assignments: Assignment[] = []
  url = " http://localhost:8010/api/assignments"
  getAssignments():Observable<Assignment[]>{
    return this.http.get<Assignment[]>(this.url)
  }
  getAssignment(id:number):Observable<Assignment|undefined>{
    return this.http.get<Assignment>(`${this.url}/${id}`)
  }
 
  AddAssignment(assignment: Assignment):Observable<any>{
    return this.http.post<Assignment>(this.url,assignment)
    //return  of('Assignment "' + assignment.name + '" has been added successfully!!')
  }
  returnAssignment(assignment: Assignment):Observable<any>{
    assignment.returned =true
    return this.http.put<Assignment>(this.url,assignment)  
  }
  updateAssignment(assignment: Assignment):Observable<any>{
    return this.http.put<Assignment>(this.url,assignment)
   }
  deleteAssignment(assignment: Assignment):Observable<any>{
      let response = this.http.delete<Assignment>(`${this.url}/${assignment._id}`);
      return response;
  }

}
