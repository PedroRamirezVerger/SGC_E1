export class Especialidad{
    _id?: string;
    nombre: string;
    duracionCita: number;
    listaMedicos: String[];

    constructor(){
        this._id="";
        this.nombre= "";
        this.duracionCita=null;
        this.listaMedicos=null;

    }
}