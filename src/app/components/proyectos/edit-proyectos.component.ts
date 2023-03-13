import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proy : Proyectos = null;

  constructor(private sProyectos: SProyectosService, 
    private activatedRouter: ActivatedRoute,
    private router: Router ,
    public imageService:ImageService) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sProyectos.detail(id).subscribe(
        data => {
          this.proy = data;
        }, err =>{
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.proy.urlp=this.imageService.url
      this.sProyectos.update(id, this.proy).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }
      )
    }

    uploadImage($event:any){
      const id = this.activatedRouter.snapshot.params['id'];
      const name="pro"+id;
      this.imageService.uploadImage($event, name)
    }

}
