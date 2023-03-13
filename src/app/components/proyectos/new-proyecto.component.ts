import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombrep: string = '';
  descripcionp: string = '';
  fechap: string = '';
  urlp: string = '';

  constructor(private sProyectos: SProyectosService, 
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService:ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyectos(this.nombrep, this.descripcionp,this.fechap,this.urlp);
    this.sProyectos.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name="exp"+id;
    this.imageService.uploadImage($event, name)
  }

}
