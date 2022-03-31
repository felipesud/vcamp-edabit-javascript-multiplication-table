//Desafio técnico: Programa V_Camp (Vertical de Front End) - Valtech Brazil
//Por: Felipe dos Santos Belisário
//Referência: https://github.com/valtech-br/vcamp-edabit-instrucoes

/* Função adiciona elemento, por meio de um For Loop itera de 0 até o tamanho desejado, então pega o número inicial e soma na variável 'soma'
esse resultado armazena no array 'somaResultado', assim para cada laço os números contidos no array somaResultado vai pulando de acordo com o numInicial, ou seja
se numInicial == 1, o array vai ser [1,2,3,4,5,n], se numInicial == 2 o array somaResultado vai ser: [2,4,6,8,10,n] assim sucessivamente.

*/
function adicionaElemento(numInicial, tamanho) {
  let somaResultado = []
  let soma = 0;
  for (let i = 0; i < tamanho; i++) {
    soma = soma + numInicial;
    somaResultado.push(soma);
  }
  return somaResultado;
}

/* 
Função multiplicationTable usada pra passar na função adicionalElemento o valor (n) vezes no total que esta função vai rodar e também pra determinar o valor inicial j
O For loop vai de 1 até n fazendo com que o resultado final seja (n) arrays em sequência, formando o resultado final do exercício, por exemplo:
multiplicationTable(3)
output:
[1,2,3]
[2,4,6]
[3,6,9]

*/

function multiplicationTable(n) {
	let resultado = [];
    for (let j = 1; j <= n; j++) {
      resultado.push(adicionaElemento(j, n));
    }
    return resultado;
  }




