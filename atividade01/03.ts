import read = require('readline-sync');

const numeros: number[] = [];

console.log("Digite 10 numeros inteiros aleatorios: ");

for (let i = 0; i < 10; i++) {
    let entrada = read.questionInt(`Digite o ${i + 1}numero: `);
    numeros.push(entrada);
}

const nummerosOrdenados = [...new Set(numeros)].sort((a, b) => a - b);;

console.log("\nListar dados do Set:\n");
nummerosOrdenados.forEach(entrada => console.log(entrada));