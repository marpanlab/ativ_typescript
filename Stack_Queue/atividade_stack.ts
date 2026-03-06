import rls = require("readline-sync");
import { Stack } from "./Stack";

const stack = new Stack<string>();

let opcao: number;


do {
    console.log("********************************************\n")
    console.log("     1 - Adicionar Livro na Pilha             ")
    console.log("     2 - Listar todos os Livros               ")
    console.log("     3 - Retirar Livro da Pilha               ")
    console.log("     0 - Sair                               \n")
    console.log("********************************************\n")
    
    opcao = rls.questionInt("Entre com a opcao desejada:");


switch(opcao) {
    case 1:
        let livro = rls.question("\n\nDigite o nome:\n");
        stack.push(livro)
        console.log("Pilha:\n")
        stack.printStack()
        console.log("\nLivro Adicionado!")
        break
    case 2:
        console.log("\n\nLista de Livros na Pilha:\n");
        if(stack.isEmpty()){
            console.log("\nA Pilha está vazia!")
        } else {
            stack.printStack();
        }
        break
    case 3:
        if(stack.isEmpty()) {
        console.log("\nA Pilha está vazia!")
        } else {
        let retirou = stack.pop();
        console.log("\n\nPilha:\n");
        stack.printStack();
        console.log(`\nO livro ${retirou} foi retirado da pilha!`);
        }
        break
    case 0:
        console.log("\n\nPrograma Finalizado!");
        break;
    default:
        console.log("\n\nOpcao invalida!");
        break;
} 
}while (opcao !== 0);

