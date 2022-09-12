alert("Bienvenido a la tienda!");

let producto = prompt(
  "Ingrese la sigla del producto que desea comprar: \n\n A-shampoo \n B-acondicionador \n C-mascara hidratante" //saltos de linea
);
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades (máx 10.)"));
while (!cantidad || cantidad > 10) {
  //Validamos que seleccione una cantidad
  alert("Seleccione una cantidad de 1 a 10");
  cantidad = parseInt(prompt("Ingrese la cantidad de unidades (máx 10.)"));
}

//Pongo las funciones globales
const iva = (a) => a * 0.21;
const suma = (a, b) => a + b;
const multiplicacion = (a, b) => a * b;

//Funcion para validar responsable inscripto
const esResponsableInscripto = (precioNeto, calculoIva, precioBruto) => {
  let sujeto = prompt("Es usted responsable inscripto?").toUpperCase();

  if (sujeto === "SI") {
    let recibo = `Su total es $${precioNeto}+ $${calculoIva} (iva) = $${precioBruto}`;
    alert(recibo);
  } else if (sujeto === "NO") {
    let recibo = `Su total es $${precioBruto} (iva incluido)`;
    alert(recibo);
  } else {
    alert("Por favor ingrese Si o No!");
    esResponsableInscripto(precioNeto, calculoIva, precioBruto);
    //Aca aplique una Recursividad, vuelvo a llamar a la funcion dentro de la funcion. No se ve en este cursoy no tenes porque saberlo, tranqui!
  }
};

if (producto.toUpperCase() === "A") {
  //.toUpperCase() sube a mayuscula todo

  let eleccion = "Shampoo";
  let precio = 300;

  let mensaje = `Usted ha elegido ${cantidad} unidades de ${eleccion}`;
  alert(mensaje);

  let precioNeto = multiplicacion(precio, cantidad);
  let calculoIva = iva(precioNeto);
  let precioBruto = suma(precioNeto, calculoIva);

  esResponsableInscripto(precioNeto, calculoIva, precioBruto); //esta funcion la podemos repetir y nos ahorramos unas lineas
} else if (producto.toUpperCase() === "B") {
  let eleccion = "Acondicionador";
  let precio = 200;

  let mensaje = `Usted ha elegido ${cantidad} unidades de ${eleccion}`;
  alert(mensaje);

  let precioNeto = multiplicacion(precio, cantidad);
  let calculoIva = iva(precioNeto);
  let precioBruto = suma(precioNeto, calculoIva);

  esResponsableInscripto(precioNeto, calculoIva, precioBruto);
} else if (producto.toUpperCase() === "C") {
  let eleccion = "Mascara Hidratante";
  let precio = 250;

  let mensaje = `Usted ha elegido ${cantidad} unidades de ${eleccion}`;
  alert(mensaje);

  let precioNeto = multiplicacion(precio, cantidad);
  let calculoIva = iva(precioNeto);
  let precioBruto = suma(precioNeto, calculoIva);

  esResponsableInscripto(precioNeto, calculoIva, precioBruto);
} else {
  alert("La letra ingresada no corresponde a ningun producto");
}
