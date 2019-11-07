import { Usuario } from './Usuario';

export class Medico {//extends Usuario{
    especialidad: string;
    centrosalud: string;

    constructor(){
        //super();
        this.especialidad = "";
        this.centrosalud = "";
    }
}