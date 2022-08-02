
//variable carrito
let carrito = []
//consutructor
class Comidas {
    constructor (precio, tamanio, tipo, temperatura) {
        this.precio = precio
        this.tamanio = tamanio
        this.tipo = tipo
        this.temperatura = temperatura
    } 
}

//productos
const wraps = new Comidas (700, ['normal' , 'grande'], ['paltapollo', 'americano', 'baru'], ['frio', 'caliente'])
const tartas = new Comidas (500,['unico'], ['verduras', 'jamon y queso'], ['frio', 'caliente'] )
const ensaladas = new Comidas (600, ['unico'], ['mediterranea', 'cesar', 'proteica'], ['fria'])


//funcion caracteristicas producto

const editarProductos = (comidasParaEditar) => {
    const productoAeditar = {
        precio: comidasParaEditar.precio,
        tamanio: comidasParaEditar.tamanio,
        tipo: comidasParaEditar.tipo,
        temperatura: comidasParaEditar.temperatura,
        cantidad: 1,
    }
    productoAeditar.tamanio = prompt('Elija el tamaño, tenemos los siguientes en stock: ' + comidasParaEditar.tamanio.join('-'))
    productoAeditar.tipo = prompt('Elija alguno de los siguientes: ' + comidasParaEditar.tipo.join('-')).toLowerCase()
    productoAeditar.temperatura = prompt('Como queres que te entreguemos tu comida?: ' + comidasParaEditar.temperatura.join('-'))
    productoAeditar.cantidad = Number(prompt('que cantidad?'))

    return productoAeditar
}

//seleccion usuario

seleccionarProducto = () => {

const seleccionUsuario = prompt('Elegí un producto de la carta entre: Wrap, Tarta y/o Ensalada')

switch (seleccionUsuario) {

    
    case 'wrap':

        console.log('elegiste wraps')
        carrito.push (editarProductos(wraps))
        break

    case 'tarta':
        console.log('elegiste tartas')
        carrito.push (editarProductos(tartas))
        break

    case 'ensalada':
        console.log('elegiste ensaladas')
        carrito.push (editarProductos(ensaladas))
        break

    default:
        console.log('por favor, elegi un producto de la carta')
        break
}
    if (confirm ('Desea agregar otro producto al carrito?')) {
        seleccionarProducto ()
    }   
}
//funcion sumar!

let sumarTotalCarrito = () => {
    let sumarTotalCarrito = 0 
    for (const producto of carrito) {
        sumarTotalCarrito +=  producto.precio * producto.cantidad
    }
    return sumarTotalCarrito
}

//Ejecutando

seleccionarProducto ()

alert ('gracias por tu compra, su total es de $' + sumarTotalCarrito ())
console.log(carrito);

