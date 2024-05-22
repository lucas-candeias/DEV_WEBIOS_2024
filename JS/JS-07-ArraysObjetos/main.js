let pessoa = {
    corDosOlhos: "verde",
    altura: 1.70,
    corCabelo: "preto",
    nome:"Caio",
    sobrenome: "Maciel",
    hobbie: ["Futebol", "LoL", "Tocar guitarra"],
    //criar outro objeto dentro do objeto
    endereco: {
        rua: "Jao madeiro",
        numero: 234,
        cidade: "São Paulo",
        estado: "SP"
    }
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.hobbie);
console.log(pessoa.hobbie[1]);
//retorna todo o endereço
console.log(pessoa.endereco);
//retorna apenas uma informação do endereço
console.log(pessoa.endereco.estado);

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

console.log(tarefa);
console.log(tarefa[1]);
console.log(tarefa[1].isPronta);
///Crie mais 2 objetos com duas tarefas diferentes, uma dessas tarefas tera a propriedade isPronta com o valor false 

console.clear();

let recebeJSON = JSON.stringify(pessoa)


console.log(recebeJSON);
console.clear();

var jsonito = '{"corDosOlhos":"verde","altura":1.7,"corCabelo":"preto","nome":"Caio","sobrenome":"Maciel","hobbie":["Futebol","LoL","Tocar guitarra"],"endereco":{"rua":"Jao madeiro","numero":234,"cidade":"São Paulo","estado":"SP"}}'

console.log(jsonito);
console.log(JSON.parse(jsonito));

