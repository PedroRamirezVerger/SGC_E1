import { Paciente } from './Paciente';
import { Medico } from './Medico';
import { CentroSalud } from './CentroSalud';

export class Cita{

    _id?: string;
    paciente: Paciente;
    medico : Medico;
    fecha: Date;
    hora: string;
    centroSalud: CentroSalud;
    consulta: Int16Array;
    
    constructor(){
        this._id="";
        this.paciente=null;
        this.medico=null;
        this.fecha=null;
        this.hora="";
        this.centroSalud=null;
        this.consulta=null;
    }
}