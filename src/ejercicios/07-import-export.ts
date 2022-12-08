import {Producto,calcularISV} from './06-destructurar-funciones';


const carritoCompras: Producto[] = [
    {
        descripcion: 'Telefono 1',
        precio: 100
    },
    {
        descripcion: 'Telefono 2',
        precio: 150
    }

];  

const [total,isv] = calcularISV(carritoCompras);

console.log('Total', total);
console.log('isv',isv);