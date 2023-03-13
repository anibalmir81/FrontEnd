export class Proyectos {
    id? : number;
    nombreP : string;
    descripcionP : string;
    fechap:string;
    urlp:string;

    constructor(nombreP: string, descripcionP: string,fechap: string, urlp: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fechap= fechap;
        this.urlp= urlp;
    }
}
