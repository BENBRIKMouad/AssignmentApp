export class Assignment{
    _id?:string;
    id!:number;
    name!:string;
    description!:string;
    dueDate!:Date;
    returned: boolean = false;
}