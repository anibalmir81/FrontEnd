export class Educacion {
    id? : number;
    instituto : string;
    carrera : string;
    img_edu: string;
    periodo: string;

    constructor(instituto: string, carrera: string, img_edu: string, periodo: string){
        this.instituto = instituto;
        this.carrera = carrera;
        this.img_edu= img_edu;
        this.periodo= periodo;
    }
}
