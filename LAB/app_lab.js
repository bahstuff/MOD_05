const carrito = [
    {
        id: 198752 ,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true,
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true,
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false,
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false,
    }
]

//LISTAR PRODUCTOS
console.log("**------LISTADO DE PRODUCTOS------**")
for(producto of carrito){
    imprimir(producto);
}

function imprimir(producto){
    console.log("------------------------------------");
    for (propiedad in producto){
        console.log(propiedad + ": " + producto[propiedad])
    }
}

//ELIMINAR PRODUCTO
console.log("**------ELIMINANDO PRODUCTO------**")
for(producto of carrito){
    if(producto.id != 54657){
        imprimir(producto);
    }
}
//ELIMINAR PRODUCTO opcion 2 NUEVOS ARRAYS
console.log("**------ELIMINANDO PRODUCTO/op2-----**")

let productosEliminados= [];
let carrito2 = [];
for(i=0; i< carrito.length; i++){
    if(carrito[i].id === 54657){
        productosEliminados.push(carrito[i]);
    } else {
        carrito2.push(carrito[i]);
    }
}
for(producto of carrito2){
    imprimir(producto);
}

//CALCULAR TOTAL CARRITO: sin el producto eliminado (no estaba segura de lo que pedía el enunciado)

let totalPrice = 0;
    for (producto of carrito2){
        totalPrice += producto.price * producto.count;
    }
    console.log("**-----PRECIO TOTAL DEL CARRITO-----**")
    console.log("Precio total: " + totalPrice.toFixed(2) + " €")

// function calculate() {
//     let totalPrice = 0;
//     totalPrice += producto.price * producto.count;
//     console.log("**-----PRECIO TOTAL DEL CARRITO----**")
//     console.log("Precio total: " + totalPrice + " €")
// }


//FILTRAR PREMIUM
////OPCION A
// console.log("**--------PRODUCTOS PREMIUM-------**");
// for (producto of carrito){
//     if(producto.premium ==true) {
//         imprimir(producto);
//     }
// }

//FILTRAR PREMIUM + PEDIDO SIN GASTOS DE ENVIO

console.log("**---------PRODUCTOS PREMIUM--------**");

//1º CREAR UN NUEVO CARRITO SIN PRODUCTO
var carritoPremium = [];
var carritoNormal = [];

//LLENAR LOS NUEVOS CARRITOS
for (i = 0; i < carrito.length; i++){
    if(carrito[i].premium == true) {
        carritoPremium.push(carrito[i]);
    } else{
        carritoNormal.push(carrito[i]);
    }
}
//MOSTRAR PRODUCTOS PREMIUM
for(producto of carritoPremium){
    imprimir(producto);
}

//MOSTRAR SI TIENE GASTOS DE ENVÍO
console.log("**----------GASTOS DE ENVÍO---------**");
if(carritoNormal!=0){
    console.log("El coste de envío son 4.99€");
} else {
    console.log("Pedido sin costes de envío");
}

//IMPRIMIR LISTA

for(product of carrito){
    document.write("<ul>");
    document.write("<li>"+ product.count+ " uds -- " + product.name +"</li>");
    document.write("</ul>")
};

// //DESCUENTO
console.log("**---DESCUENTO POR COSTE > A 100€---**");
let precioDescuento = 0;
    if(totalPrice > 100){
        //no utilizo -= para que queden los dos precios almacenados en variables dferentes
        precioDescuento = totalPrice - totalPrice * 0.05;
    }
    console.log("Precio total : " + totalPrice.toFixed(2) + " €");
    console.log("Pedido total con descuento (5%) : " + precioDescuento.toFixed(2) + " €");


