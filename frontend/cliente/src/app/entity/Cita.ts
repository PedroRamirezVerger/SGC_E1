export class Cita {
    _id?: string;
    dniPaciente: string;
    dniMedico: string;
    fecha: Date;
    hora: Date;
    consulta: string;
    especialidad: string;

    constructor() {
        this.dniPaciente = "" ;
        this.dniMedico = "" ;
        this.fecha = null ;
        this.hora = null ;
        this.consulta = "" ;
        this.especialidad = "";
    }

}