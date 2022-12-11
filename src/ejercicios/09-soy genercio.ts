
function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumber = queTipoSoy(43);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7]);

let soyExplicito = queTipoSoy<number>(354);