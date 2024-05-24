//funcao

function soma(num1, num2, num3) {
    var num1 
    var num2 
    var num3

  return num1 + num2 + num3
}

console.log(soma(2, 3, 2));
// console.log(soma);
console.clear();

//crie uma função que receba quatro valores e retorne apenas a media desses valores

function notaFinal(n1, n2, n3, n4){

  return (n1 + n2 + n3 + n4) / 4

}

console.log(notaFinal(3, 4, 5, 6));

console.clear();

const media2 = (n1, n2, n3, n4) => {
  return (n1 + n2 + n3 + n4) / 4
}

console.log(media2(5,5,5,5));

console.clear();

function onloadTela(){
  alert("Sua tela esta carregada Bem-Vindo")
  console.log("Recarregou a tela");
}

console.clear();

const  clique = () => {
  alert("Bem-Vindo você clicou em mim")
  console.log("Você clicou em um botão");
}