/*
    ===== Desestructuracion de Argumentos=====
*/
export interface Producto {
    descripcion: string,
    precio: number
}

const telefono: Producto = {
    descripcion:'Xiaomi',
    precio: 360
}

const tablet: Producto = {
    descripcion: 'Lenovo',
    precio: 280
}

export function calcularISV( productos: Producto[] ):[number,number]{

    let total= 0;

    productos.forEach(({precio})=>{
        total += precio;
    })

    return [total,total * 0.15]
}

const listaProductos = [telefono,tablet];
const [total,isv] = calcularISV(listaProductos);

console.log('Total es: ', total);
console.log('ISV es: ', isv);