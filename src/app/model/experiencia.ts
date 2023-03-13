export class Experiencia {
    id? : number;
    empresa : string;
    puesto : string;
    periodo_exp: string;
    img_exp: string;
    actividad: string;

    constructor(empresa: string, puesto: string, periodo_exp: string, img_exp: string,actividad: string) {
        this.empresa= empresa;
        this.puesto= puesto;
        this.periodo_exp= periodo_exp;
        this.img_exp= img_exp;
        this.actividad= actividad;
    }
}
