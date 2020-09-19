import { Component } from '@angular/core';
import { Student } from '../student.modal';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  students: Student[];
  constructor(private studentservice:StudentService) {}

  ngOnInit() {
    this.students=this.studentservice.getAllStudent();
  }
  ionViewWillEnter(){
    this.students=this.studentservice.getAllStudent();
  }

}
