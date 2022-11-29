/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ['lina','sofia','paola'];

interface Personaje {

    nombre: string;
    edad: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {

    nombre: 'Manuel',
    edad: 34,
    habilidades: ['inteligente','audaz','responsable']
};

personaje.puebloNatal = 'Armenia';
console.table(personaje);