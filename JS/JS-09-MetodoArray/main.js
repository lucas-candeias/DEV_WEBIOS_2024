//metodo foreach
let frutas = ["banana","maça","abacaxi","uva","melancia", "limao"] 

frutas.forEach(retornainfo)
function retornainfo(nomeFruta, indice){
    console.log(`nomeFruta: ${nomeFruta}`);
    console.log(`Indice: ${indice}`);
}

// for(var i=0; i < frutas.length ; i++){
//     console.log(``nome: ${frutas[i]}`);
//     console.log(`indice: ${[i]}`);
// }

console.clear();

//arrow Function
frutas.forEach(teste = (nomeFruta, indice) =>{
    console.log(`nomeFruta: ${nomeFruta}`);
    console.log(`Indice: ${indice}`);
})

console.clear();

//arrow Function minimalista
frutas.forEach((teste) => console.log(teste))

console.clear();



let tarefa = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
    },
    {
        id: 2,
        isPronta: false,
        nomeTarefa: "Deitar",
    },
    {
        id: 3,
        isPronta: true,
        nomeTarefa: "Rolar",
    },
]

tarefa.forEach((tarefas) => console.log(tarefas))
tarefa.forEach((tarefas) => console.log(tarefas.isPronta))
tarefa.forEach((tarefas) => console.log(tarefas.nomeTarefa))

console.clear();

//metodo Map
let numeros = [4, 9, 16, 25]
let novoArray = numeros.map(Math.sqrt)

console.log("Array antigo " + numeros);
console.log( "Novo Array " + novoArray);

console.clear();

let mapText = tarefa.map((retornaText) => {
    console.log(retornaText.nomeTarefa)
})

console.clear();

let numeros2 = [3, 13, 24, 36, 47, 50, 60, 78, 89]

let resultado = numeros2.filter(retornaFiltro)

function retornaFiltro(num){
    return num > 30

}

console.log(resultado);

console.clear();

let tarefasFiltro = tarefa.filter((resultadoFiltro) => {
    return resultadoFiltro.isPronta === false
})

console.log(tarefasFiltro);

console.clear();

let sapatos = [
    {marca: "Nike", quantidade:3},
    {marca: "Adidas", quantidade: 5},
    {marca: "Puma", quantidade: 7}
]

console.log(sapatos.find((retornaFind) => {
    
    return retornaFind.marca == "Puma";
}));
// sapatos.find((retornaFind) => {
    
//     console.log(retornaFind.marca = "Puma");
// })
