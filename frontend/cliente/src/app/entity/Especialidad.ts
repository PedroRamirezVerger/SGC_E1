export class Especialidad{
    _id?: string;
    nombre: string;
    duracionCita: Int16Array;
    listaMedicos: String[];

    constructor(){
        this._id="";
        this.nombre= "";
        this.duracionCita=null;
        this.listaMedicos=null;

    }
}