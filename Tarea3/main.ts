import {Aprendiz, NivelEducativo} from "./aprendiz.js";
import {Curso} from "./curso.js";

let cursos = [new Curso("JavaScript", 40,90, true, 2019), 
new Curso("Webkit", 30,55, false, 2020), 
new Curso("Angular", 26,70, true, 2021),
new Curso("React", 20,60, false, 2022)];

export const ap = new Aprendiz("Juan", "Perez", "avatar.png", 20, NivelEducativo.POSTGRADO, cursos);
console.log(ap.cursos);
//console.log(ap);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("btn-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;

btnFiltro.onclick = () => {
    let text:string = textoBusqueda.value;
    text = (text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(c => c.nombre.match(text)) 
    mostrarCursos(cursosFiltrados);
};


//btnFiltro.onclick = filtrarPorNombre;
/*
function filtrarPorNombre():void {
    let text:string = textoBusqueda.value;
    text = (text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(function(c){return c.nombre.match(text);}) 
    mostrarCursos(cursosFiltrados);
}*/

function mostrarDatosAprendiz(aprendiz: Aprendiz): void {
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `
    <tr><td colspan=2><img src="./${aprendiz.avatar}" height=100></td></tr>
    <tr><td>Nombre:</td><td>${aprendiz.nombres}</td></tr>` +
    `<tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>` +
    `<tr><td>Nivel Educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>` +
    `<tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`;
    aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticas(aprendiz: Aprendiz):void{
    let numeroCertificados: number = aprendiz.darCursosCertificados();
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Cursos Certificados:</></td><td>${numeroCertificados}</td>`;
    estadisticasTable.appendChild(trElement);
}

function mostrarCursos(cursos: Curso[]):void{
    let tbodyCursos: HTMLElement = document.createElement("tbody");
    let estado: string[] = cursos.map(c => (c.calificacion>60)?"green":"red");
    let index: number = 0;
    for(let curso of cursos){
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td style ="color:${estado[index]}">${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>`;
        tbodyCursos.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(tbodyCursos);
}

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursos(ap.cursos);