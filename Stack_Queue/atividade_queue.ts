import rls = require("readline-sync");
import Queue = require("./Queue");

const queue = new Queue.Queue<string>();
let opcao: number;


do {
    console.log("********************************************\n")
    console.log("     1 - Adicionar Cliente na fila            ")
    console.log("     2 - Listar todos os Clientes             ")
    console.log("     3 - Retirar Cliente da Fila              ")
    console.log("     0 - Sair                               \n")
    console.log("********************************************\n")
    
    opcao = rls.questionInt("Entre com a opcao desejada:");


switch(opcao) {
    case 1:
        let cliente = rls.question("\n\nDigite o nome:\n");
        queue.enqueue(cliente)
        console.log("Fila:\n")
        queue.printQueue()
        console.log("\nCliente Adicionado!")
        break
    case 2:
        console.log("\n\nLista de Clientes na Fila:\n");
        if(queue.isEmpty()){
            console.log("A Fila está vazia!")
        } else {
            queue.printQueue()
        }
        break
    case 3:
        if(queue.isEmpty()) {
        console.log("A Fila acabou!")
        } else {
        let andou = queue.dequeue();
        console.log("\n\nFila:\n");
        queue.printQueue();
        console.log(`\nO(A) Cliente ${andou} foi Chamado(a)!`);
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

