"use strict";
function calculoDedescuento(precioServicio, descuentoPorcentaje) {
    let resultado = precioServicio * (1 - descuentoPorcentaje);
    return resultado;
}
alert(`
    ¡Conoce mis servicios!
    1. Fotografía Profesional - 1000 soles
    2. Papeleria - 300 soles
    3. Branding - 1000 soles
    4. UX/UI - 1200 soles
    5. Lettering- 500 soles
`)

let servicios = prompt("¿Qué servicio te interesa?");
let precio;
if (servicios === "1") {
    precio = 1000;

} else if (servicios === "2") {
    precio = 300;

} else if (servicios === "3") {
    precio = 1000;

} else if (servicios === "4") {
    precio = 1200;

} else if (servicios === "5") {
    precio = 500;

} else {
    alert("Debe ingresar un servicio");
}


let cuestionario = prompt("¿Quieres un descuento en tu primer proyecto?: ");
if (cuestionario === "si" || cuestionario === "SI" || cuestionario === "Si" || cuestionario === "sI") {
    alert("Gracias, necesitamos la siguiente información")
    let nombre = prompt("escribe tu nombre:      ");
    let apellido = prompt("escribe tu apellido:     ");
    let correo = prompt("escribe tu correo: ");
    alert(`Estimado cliente ${apellido} se ha guardado sus datos de contacto, nuestra cotización es de ${calculoDedescuento(precio,0.2)}se enviará al correo ${correo}`);
} else {
    alert("Te espero nuevamente");
};


