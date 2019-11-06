export class Usuario {
    _id?: string;
    dni: string;
    password: string;
    tipo: string;
    nombre: string;
    apellidos: string;
    direccion: string
    telefono: string;
    email: string;
    sexo: string;
    fechaNacimiento: Date;

    constructor() {
        this.dni = "" ;
        this.password  = "";
        this.tipo = "" ;
        this.nombre = "" ;
        this.apellidos = "" ;
        this.direccion = "" 
        this.telefono = "" ;
        this.email = "" ;
        this.sexo = "" ;
        this.fechaNacimiento = null;
    }

}

