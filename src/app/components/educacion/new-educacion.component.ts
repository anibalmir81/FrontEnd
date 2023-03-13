import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ImageService } from 'src/app/service/image.service';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  instituto: string = '';
  carrera: string = '';
  img_edu: string= '';
  periodo: string = '';

  constructor(private sEducacion: SEducacionService, 
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService:ImageService) { }
  ngOnInit(): void {
  }
  onCreate(): void {
  this.img_edu=this.imageService.url
  const edu = new Educacion(this.instituto, this.carrera, this.periodo,this.img_edu);
  this.sEducacion.save(edu).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
}
  uploadImage($event:any){

  const id= this.activatedRouter.snapshot.params['id'];
  const name="exp"+id;
  this.imageService.uploadImage($event, name)
  }
}
