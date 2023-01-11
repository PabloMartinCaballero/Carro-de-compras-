//Carrito de compras 

let product = prompt("Escriba el producto deseado");
let cant = parseInt(prompt("Ingrese la cantidad deseada"));
let shoppingCart = [];

//Stock de la tienda

let PRODUCTOS = [{
    id: "Guitarra",
    modelo: "Hipston",
    cantidad : 20,
    precio : 12000
},
{
    id: "Bajo",
    modelo : "Fender",
    cantidad : 30,
    precio : 15000
},
{ 
    id: "Armonica",
    modelo : "Parquer",
    cantidad : 40,
    precio: 2000

}
];

//Recorro todo el array, para observar mi stock

const stock = PRODUCTOS.forEach((instrument) => {
    console.log(instrument);
})

// Bucle para seguir comprando

let keepBuying = 1;

while ( keepBuying != 0 ) {
//Selecciono el producto por medio de un filtro y verifico si tengo stock disponible para el mismo

const desiredProduct = PRODUCTOS.filter (instrument => 
instrument.id == product && instrument.cantidad !== 0
)
 
//Agrego el producto deseado a mi carrito de compras incluyendo el precio

const addToCart = desiredProduct.map((instrument)=>{  
    return { id: instrument.id,
             precio : instrument.precio,
             cantidad : cant
}})

shoppingCart.push(addToCart);
console.log(shoppingCart);


//Resto ese producto al stock de mis PRODUCTOS 

const newStock = desiredProduct.map((instrument)=>{  
    return { ...instrument,
            cantidad: instrument.cantidad - cant

}})

//Funcion para actualizar Productos
//NewStock se agrega al array principal, remplazando el anterior y actualizando.

function toUpdate (oldstock,newStock) {
    for (let i = 0; i < oldstock.length; i++){
        if (oldstock[i].id === product){
        delete PRODUCTOS[i];   
        PRODUCTOS.push(newStock);
        } 
    }
}

toUpdate(PRODUCTOS,newStock);
console.log(PRODUCTOS)

//Salida del bucle
keepBuying = parseInt(prompt("Para seguir comprando ingrese 0"));

}








