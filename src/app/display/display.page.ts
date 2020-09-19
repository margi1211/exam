import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student.modal';
import { StudentService } from '../student.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {

  loadedRecipe: Student;
  constructor(private activatedRoute: ActivatedRoute,private studentservice:StudentService,private router: Router,
    private altctr: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('uid')){
        this.router.navigate(['home'])
        return;
      }
      const recipeId = paramMap.get('uid');
      this.loadedRecipe=this.studentservice.geteRecipe(recipeId);

      if(!this.loadedRecipe.id){
        this.router.navigate(['home']);
      }
    });
  }

  async onDeleteClick(){

    const alert = await this.altctr.create({
      header: 'Are You Sure?',
      message: 'Are You Sure Delete This Recipe?',
      buttons:[{
        text:'Cancel',
        role: 'cancel'
      },
      {
        text:'Delete',
        handler:()=>{
          this.studentservice.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['recipes'])
        }
      }
    ]
    });
    await alert.present()
}


}
