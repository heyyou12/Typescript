/*
    ===== Desestructuracion =====
*/
interface Reproductor {
    volumen:number;
    segundo:number;
    cancion:string;
    detalles: Detalles;
}

interface Detalles {
    autor:string;
    anio:number;
}

const reproductor: Reproductor = {
    volumen: 60,
    segundo: 40,
    cancion: 'the scientist',
    detalles: {
        autor:'coldplay',
        anio: 2015
    }
}

const {volumen, segundo:seg,cancion,detalles} = reproductor;
const {autor,anio} = detalles;

//const {volumen, segundo,cancion,detalles: {autor}} = reproductor;


//console.log('El volumen actual es: ', volumen);
//console.log('El segundo actual es: ', seg);
//console.log('La cancion actual es: ', cancion);
//console.log('El autor es: ', autor);

const dbz:string[] = ['goku','vegeta','trunks'];

const [p1,p2,p3] = dbz;

console.log('personaje 1: ',p1 );
console.log('personaje 2: ',p2 );
console.log('personaje 3: ',p3 );
