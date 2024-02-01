

document.writeln("<h1>Gracias por confiar en nosotros ;)</h1>");

// Pedimos datos a nuestros clientes
var numIngredientes = window.prompt("Benvenuti alla nostra pizzería, ¿Cuántos ingredientes llevará su pizza?: ");
if (!isNaN(numIngredientes)) {
    var ingredientes = window.prompt("Dime los " + numIngredientes + " ingredientes separados por comas: ");
    // Convertimos la cadena de ingredientes en un array
    var arrayIngredientes = ingredientes.split(',');

    if (arrayIngredientes.length === parseInt(numIngredientes)) {
        // Mostramos el array completo
        var ok = window.prompt("Los ingredientes seleccionados son: " + arrayIngredientes.join(', ') + ". Si es correcto, escriba 'ok' o 'cambio' para cambiar un ingrediente");
        // Ponemos en minúscula
        ok = ok.toLowerCase().trim();
        if (ok === "ok") {
            window.alert("Muchas gracias por su pedido, en unos minutos disfrutará de su pizza con " + arrayIngredientes.join(', '));
        } else if (ok === "cambio") {
            var cambio = window.prompt("Indique el ingrediente que desea cambiar:");

            if (arrayIngredientes.includes(cambio.toLowerCase().trim())) {
                var nuevoIngrediente = window.prompt("Introduzca el nuevo ingrediente");
                //posición del ingrediente que cambiar
                var posicionIngrediente = arrayIngredientes.indexOf(cambio.toLowerCase().trim());
                //colocamos el nuevo ingrediente en la posición del ingrediente cambiado
                arrayIngredientes[posicionIngrediente] = nuevoIngrediente;
               
                window.alert("Muchas gracias por su pedido, en unos minutos disfrutará de su pizza con " + arrayIngredientes.join(', '));
            } else {
                window.alert("Ingrediente no encontrado en la lista. Para continuar recargue y vuelva a empezar. Gracias.");
            }
        } else {
            window.alert("Opción no reconocida. Recargue y vuelva a empezar.");
        }
    } else {
        window.alert("No ha introducido suficientes ingredientes. Recargue y vuelva a empezar.");
    }
} else {
    window.alert("Por favor, recargue e introduzca un número entero.");
}
