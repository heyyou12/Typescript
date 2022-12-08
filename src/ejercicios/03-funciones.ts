function sumar (a:number, b:number):number {
    return a + b;
}

const sumarFlecha = (a:number, b:number): number => {
    return a + b;
}

function multiplicar(a:number, b?:number, c:number = 3):number {
    return a * c;
}
//const resultado = multiplicar(5,6)
//console.log(sumar(5,10),sumarFlecha(2,6), resultado);

interface PersonajeAlterno  {
    nombre:string,
    pv:number,
    mostrarPuntos: () => void;
}

function calcularPuntos(personaje: PersonajeAlterno, puntos:number): void {
    personaje.pv += puntos;
}

const personaje1: PersonajeAlterno = {
    nombre: 'Carlos',
    pv: 37,
    mostrarPuntos(){
        console.log('puntos ', this.pv);
    }
}

calcularPuntos(personaje1,12);
personaje1.mostrarPuntos();
