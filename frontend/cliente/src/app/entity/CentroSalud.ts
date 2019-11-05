import { Medico } from './Medico';

export class CentroSalud{
    _id?: string;
    nombre:string;
    localidad:string;
    medico: Medico[];

    constructor(){
        this._id="";
        this.nombre="";
        this.localidad="";
        this.medico=null;
    }
}