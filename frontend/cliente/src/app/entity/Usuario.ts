export class Usuario {
    _id?: string;
    nombre: string;
    apellidos: string;
    direccion: string;
    dni: string;
    password: string;
    telefono: string;
    email: string;
    sexo: string;
    fechaNacimiento: Date;
    tipo: string;

    constructor() {
        this.nombre = "";
        this.apellidos = "";
        this.direccion = "";
        this.dni = "";
        this.password = "";
        this.telefono = "";
        this.email = "";
        this.sexo = "";
        this.fechaNacimiento = null;
        this.tipo = "";
    }

}

