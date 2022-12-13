function classDecorator<T extends {new (...arg: any[])}>(
    constructor: T
){
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const clase = new MiSuperClase();
console.log(clase.imprimir);