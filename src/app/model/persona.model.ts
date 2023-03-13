export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    descripcion: string;
    titulo: string;

    constructor(nombre: string, apellido: string, img: string, descripcion: string, titulo: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion= descripcion;
        this.titulo= titulo;
    }
    
}