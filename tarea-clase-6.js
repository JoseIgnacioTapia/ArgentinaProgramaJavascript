/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad 
y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando
los inputs ya creados (investigar cómo en MDN).
*/
const nodoDiv = document.querySelector('div');

let max = 0;
let min = 0;
let promedio = 0;

function crearNodos(cant) {
    const nodoDiv = document.querySelector('div');
    
    for (let i=0; i < cant; i++) {

        const nuevoLavel = document.createElement('label');
        const textoLavel = document.createTextNode(`Edad integrante n° ${i+1}`);
        nuevoLavel.appendChild(textoLavel);
        nodoDiv.appendChild(nuevoLavel);

        const nuevoInput = document.createElement('input');
        nuevoInput.placeholder = 'Ingresa la edad aquí';
        nodoDiv.appendChild(nuevoInput);
    }
}

function eliminarNodos() {

    let elemento = document.querySelector('div');
    let parrafos = document.querySelector('p');

    while (elemento.firstChild) {

        elemento.removeChild(elemento.firstChild);

    }

    while (parrafos.firstChild) {

        parrafos.removeChild(parrafos.firstChild);

    }
}

function calcularMenorMayor(arr) {

    max = arr[0];
    min = arr[0];

    for (let i=0; i < arr.length; i++) {

        if (max <= arr[i]) {
            max = arr[i];
        }
        if (min >= arr[i]) {
            min = arr[i];
        }
    }
}

function calcularPromedio(arr) {

    let suma = 0;

    for (let i=0; i < arr.length; i++) {
        suma += arr[i];
        promedio = suma/arr.length;
    }
    
}

const botonIngreso = document.querySelector('#boton-ingresar');

botonIngreso.onclick = function() {

    const cantidadFamilia = Number(document.querySelector('#cantidadFamiliares').value);

    crearNodos(cantidadFamilia);
    
}

const botonLimpiar = document.querySelector('#boton-limpiar');

botonLimpiar.onclick = function() {

    document.querySelector('#cantidadFamiliares').value = '';

    eliminarNodos();

}

const botonCalcular = document.querySelector('#boton-calcular');

botonCalcular.onclick = function() {

    const edades = document.querySelectorAll('input');
    let arrayEdades = [];
    for (let i=1; i<edades.length; i++) {
        arrayEdades.push(Number(edades[i].value));
    }
    
    calcularMenorMayor(arrayEdades);
    calcularPromedio(arrayEdades);

    document.querySelector('#mayor').innerText = `La mayor edad es ${max}`;
    document.querySelector('#menor').innerText = `La menor edad es ${min}`;
    document.querySelector('#promedio').innerText = `El promedio de edades es ${promedio}`;

}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para 
completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
