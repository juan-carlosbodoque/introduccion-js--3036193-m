// === TIPOS DE DATOS ===
let texto = "Tomate";
let numero = 6500;
let booleano = true;
let indefinido;
let nulo = null;
let objeto = { nombre: "Banano", precio: 3000 };
let arreglo = ["Tomate", "Banano", "Mango"];
function total(p, c) { return p * c; }
let big = 12345678901234567890n;

console.log("=== TIPOS DE DATOS ===");
console.log("String:", texto);
console.log("Number:", numero);
console.log("Boolean:", booleano);
console.log("Undefined:", indefinido);
console.log("Null:", nulo);
console.log("Object:", objeto);
console.log("Array:", arreglo);
console.log("Function (6500x2):", total(6500,2));
console.log("BigInt:", big);

// === HISTORIAL DE VENTAS ===
let ventas = [
  { cliente:"Neithan", producto:"Tomate", cantidad:3, precio:6500 },
  { cliente:"Felipe", producto:"Banano", cantidad:5, precio:3000 },
  { cliente:"María", producto:"Mango", cantidad:2, precio:4500 }
];

console.log("\n=== HISTORIAL DE VENTAS ===");
ventas.forEach(v => {
  let sub = v.cantidad * v.precio;
  let tot = sub * 1.19;
  console.log(
    `Cliente: ${v.cliente} | Producto: ${v.producto} | Cantidad: ${v.cantidad} | Precio: ${v.precio} | Subtotal: ${sub} | Total: ${tot}`
  );
});
