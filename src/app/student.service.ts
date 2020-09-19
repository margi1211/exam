import { Injectable } from '@angular/core';
import { Student } from './student.modal';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private student: Student[] =[
    {
      id:'201606100110016',
      marks1:'85',
      marks2:'85',
      marks3:'85',
      
    },
    {
      id:'201606100110059',
      marks1:'75',
      marks2:'95',
      marks3:'80',
      
    },
    {
      id:'201606100110012',
      marks1:'75',
      marks2:'65',
      marks3:'45',
      
    },  
  ];
  

  constructor() { }

  getAllStudent(){
    return [...this.student];
  }
  geteRecipe(enrollmentno:string){
    return{
      ...this.student.find(student => {
        return student.id ===enrollmentno;
      }),
    }
  }
  deleteRecipe(enrollmentno:string){
    this.student=this.student.filter(student => {
      return student.id !==  enrollmentno;
    })
  }
}
