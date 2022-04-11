import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso("JavaScript", 40, 90, true, 2019),
    new Curso("Webkit", 30, 55, false, 2020),
    new Curso("Angular", 26, 70, true, 2021),
    new Curso("React", 20, 60, false, 2022)];
export var ap = new Aprendiz("Juan", "Perez", "avatar.png", 20, NivelEducativo.POSTGRADO, cursos);
console.log(ap.cursos);
//console.log(ap);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("btn-filtro");
var textoBusqueda = document.getElementById("texto-busqueda");
btnFiltro.onclick = function () {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
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
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "\n    <tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=100></td></tr>\n    <tr><td>Nombre:</td><td>").concat(aprendiz.nombres, "</td></tr>") +
        "<tr><td>Apellidos:</td><td>".concat(aprendiz.apellidos, "</td></tr>") +
        "<tr><td>Nivel Educativo:</td><td>".concat(aprendiz.nivelEducativo, "</td></tr>") +
        "<tr><td>Edad:</td><td>".concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos Certificados:</></td><td>".concat(numeroCertificados, "</td>");
    estadisticasTable.appendChild(trElement);
}
function mostrarCursos(cursos) {
    var tbodyCursos = document.createElement("tbody");
    var estado = cursos.map(function (c) { return (c.calificacion > 60) ? "green" : "red"; });
    var index = 0;
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(curso.nombre, "</td>\n        <td>").concat(curso.horas, "</td>\n        <td style =\"color:").concat(estado[index], "\">").concat(curso.calificacion, "</td>\n        <td>").concat(curso.certificado, "</td>\n        <td>").concat(curso.anio, "</td>");
        tbodyCursos.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(tbodyCursos);
}
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursos(ap.cursos);
