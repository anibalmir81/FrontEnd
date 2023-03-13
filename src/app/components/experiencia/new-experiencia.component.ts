import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css'],
})
export class NewExperienciaComponent implements OnInit {
  empresa: string = '';
  puesto: string = '';
  actividad: string = '';
  img_exp: string = '';
  periodo_exp: string = '';
  url: string = '';

  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService:ImageService
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    this.img_exp=this.imageService.url
    const expe = new Experiencia(this.empresa, this.puesto,this.periodo_exp,this.img_exp,this.actividad);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      err => {
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name="exp"+id;
    this.imageService.uploadImage($event, name)
  }
}