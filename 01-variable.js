// ============================
// Variables de un pedido
// ============================

// String (texto)
let producto = "Manzanas";
let cliente = "Neithan Mateo";

// Number (números)
let cantidad = 5;
let precio = 2500;

// Boolean (verdadero/falso)
let disponible = true;

// Constante (no cambia)
const IVA = 0.19;

// Calcular el total con IVA
let subtotal = cantidad * precio;
let total = subtotal + (subtotal * IVA);

// Mostrar resultados
console.log("Cliente:", cliente);
console.log("Producto:", producto);
console.log("Cantidad:", cantidad);
console.log("Precio por unidad:", precio);
console.log("Disponible:", disponible);
console.log("Subtotal:", subtotal);
console.log("Total con IVA:", total);
