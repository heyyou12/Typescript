/* Las diferencias entre clase e interfaz
    - Las interfaces no existen o no tienen codigo en javascript
    - Las clases sirven para crear instancias
    - En las interfaces no se pueden hacer implementaciones de los
    metodos, mientras que en las clases si se puede
*/
class PersonaNormal {
    constructor (public nombre: string, public direccion: string){}
}

class Heroe extends PersonaNormal{
 
    constructor (public poder:string,public edad:number,public nombreReal:string){
        super(nombreReal, 'New York USA');
    } 
}

const ironman = new Heroe('IronMan',45,'Tony');

console.log(ironman);

