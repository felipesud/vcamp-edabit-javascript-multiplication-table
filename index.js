//Desafio técnico: Programa V_Camp (Vertical de Front End) - Valtech Brazil
//Por: Felipe dos Santos Belisário
//Referência: https://github.com/valtech-br/vcamp-edabit-instrucoes

/* Função calculaElemento, tem o objetivo de calcular o valor que será alocado em cada índice do array listaResultado.
Assim para cada iteração os números contidos no array seguirão em sequencia de acordo com o numInicial.
Por exemplo: Se numInicial == 1, o array vai ser listaResultado = [1,2,3,4,5,n], se numInicial == 2 o array  vai ser listaResultado = [2,4,6,8,10,n] assim sucessivamente.
*/

function calculaElemento(numInicial, tamanho) {
  let listaResultado = []
  let soma = 0;
  for (let i = 0; i < tamanho; i++) {
    soma = soma + numInicial;
    listaResultado.push(soma);
  }
  return listaResultado;
}

/* 
Função multiplicationTable responsável por montar a tabela de multiplicação. A regra do cálculo é realizada na função calculaElemento.
O For loop vai de 1 até n fazendo com que o resultado final seja (n) arrays em sequência, formando o resultado final do exercício, por exemplo:
multiplicationTable(3)
output:
[1,2,3]
[2,4,6]
[3,6,9]
*/

function multiplicationTable(n) {
	let resultado = [];
  let tabelaFinal = resultado
    for (let j = 1; j <= n; j++) {
      resultado.push(calculaElemento(j, n));
    }
    return tabelaFinal;
  }



console.log(multiplicationTable(10))


