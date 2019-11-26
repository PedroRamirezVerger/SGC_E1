export class Rol{
    _id?: string;
    nombre: String;
    privilegios: String[];
    constructor(){
        this._id="";
        this.nombre="";
        this.privilegios=null;
    }
}