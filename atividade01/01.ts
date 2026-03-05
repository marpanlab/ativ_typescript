import read = require('readline-sync');

const cores: string[] = [];

console.log("Digite 5 cores para organizar por ordem alfabetica: ");

for (let i = 0; i < 5; i++) {
    let cor = read.question(`Digite a ${i + 1}a cor: `);
    cores.push(cor);
}
console.log("\nListar todas as cores:\n");
cores.forEach(cor => console.log(cor));

const coresOrdenadas = [...cores].sort(); 

console.log("\nOrdenar as cores:\n");
coresOrdenadas.forEach(cor => console.log(cor));