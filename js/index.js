

alert("Bienvenido a la tienda!");

let producto = prompt("Ingrese la sigla del producto que desea comprar: (A-shampoo , B-acondicionador, C-mascara hidratante:");
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades (máx 10.)"));

if (producto === "A" || producto === "a"){
    let eleccion = "Shampoo";
    let precio = 300;

    let mensaje = `Usted ha elegido ${cantidad} unidades de ${eleccion}`;
    alert(mensaje);

    const iva = (a) => a * 0.21;
    const suma = (a, b) => a + b;
    const multiplicacion = (a, b) => a * b
    let precioNeto = multiplicacion(precio, cantidad);
    let calculoIva = iva(precioNeto);
    let precioBruto = suma(precioNeto, calculoIva);
   

    let sujeto = prompt("Es usted responsable inscripto?");
    if((sujeto === "si") || (sujeto === "SI")) {
        let recibo = `Su total es $${precioNeto}+ $${calculoIva} (iva) = $${precioBruto}`;
        alert(recibo);
    }else if ((sujeto === "no") || (sujeto === "NO")){
        let recibo = `Su total es $${precioBruto} (iva incluido)`;
        alert(recibo);
    }
}
if (producto === "B" || producto === "b"){
    let eleccion = "Acondicionador";
    let precio = 200
    let mensaje = `Usted ha elegido ${cantidad} unidades de ${eleccion}`;
 
    alert(mensaje);

    const iva = (a) => a * 0.21;
    const suma = (a, b) => a + b;
    const multiplicacion = (a, b) => a * b
    let precioNeto = multiplicacion(precio, cantidad);
    let calculoIva = iva(precioNeto);
    let precioBruto = suma(precioNeto, calculoIva);
   

    let sujeto = prompt("Es usted responsable inscripto?");
    if((sujeto === "si") || (sujeto === "SI")) {
        let recibo = `Su total es $${precioNeto}+ $${calculoIva} (iva) = $${precioBruto}`;
        alert(recibo);
    }else if ((sujeto === "no") || (sujeto === "NO")){
        let recibo = `Su total es $${precioBruto} (iva incluido)`;
        alert(recibo);
    }
}

if (producto === "C" || producto === "c"){
    let eleccion = "Mascara Hidratante";
    let precio = 250
    let mensaje = `Usted ha elegido ${cantidad} unidades de ${eleccion}`;

    alert(mensaje);

    const iva = (a) => a * 0.21;
    const suma = (a, b) => a + b;
    const multiplicacion = (a, b) => a * b
    let precioNeto = multiplicacion(precio, cantidad);
    let calculoIva = iva(precioNeto);
    let precioBruto = suma(precioNeto, calculoIva);
   

    let sujeto = prompt("Es usted responsable inscripto?");
    if((sujeto === "si") || (sujeto === "SI")) {
        let recibo = `Su total es $${precioNeto}+ $${calculoIva} (iva) = $${precioBruto}`;
        alert(recibo);
    }else if ((sujeto === "no") || (sujeto === "NO")){
        let recibo = `Su total es $${precioBruto} (iva incluido)`;
        alert(recibo);
    }
} else {
    alert("La letra ingresada no corresponde a ningun producto");
}

