import {Curso} from "./curso.js";

export enum NivelEducativo {
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSTGRADO = "Postgrado"
}

export class Aprendiz{
    constructor(public nombres: string, public apellidos: string, public avatar: string, 
        public edad: number, public nivelEducativo: NivelEducativo, public cursos: Curso[]){
    }

    public darCursosCertificados(): number{
        let cursosCertificados: number = 0;
        for(let i = 0; i < this.cursos.length; i++){
            if(this.cursos[i].certificado){
                cursosCertificados++;
            }
        }
        return cursosCertificados;
    }
}