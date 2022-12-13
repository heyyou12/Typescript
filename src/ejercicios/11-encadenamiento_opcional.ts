
interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Maria',
    hijos: ['Juan','Carlos']
}

const pasajero2: Pasajero = {
    nombre: 'Sonia'
}

function cantidadHijos(pasajero:Pasajero): void{

    const totalHijos = pasajero.hijos?.length || 0;

    console.log(totalHijos);

}

cantidadHijos(pasajero2);