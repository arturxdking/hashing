// Artur Vieira Silva 3º ADS matutino 

var letra = "";
var vetor = [];
var posicao;
var inicio = 0;
var fim;

qtd = parseInt(prompt("Informe a quantidade de elementos"));

function mod(caractere, tamanho) {
  let indice = caractere.charCodeAt(0) - 64;
  return indice % tamanho;
}

fim = qtd - 1;

for (i = 0; i < qtd; i++) {
  letra = prompt("Informe uma letra do alfabeto de A à Z");

  posicao = mod(letra, qtd);

  // Verifica se a posição do vetor está vazia
  if (vetor[posicao] == null) {
    vetor[posicao] = letra;
  } else {
    // Se a posição estiver ocupada, procura a próxima posição vazia
    let proximaPosicaoVazia = -1;
    for (let j = 1; j < qtd; j++) {
      let novaPosicao = (posicao + j) % qtd;
      if (vetor[novaPosicao] == null) {
        proximaPosicaoVazia = novaPosicao;
        break;
      }
    }

    // Aloca o elemento na primeira posição vazia encontrada
    if (proximaPosicaoVazia != -1) {
      vetor[proximaPosicaoVazia] = letra;
    } else {
      // Se não encontrar uma posição vazia, volta para o início do vetor
      posicao = 0;
      while (vetor[posicao] != null && posicao < inicio) {
        posicao = posicao + 1;
      }
      // Aloca o elemento na primeira posição vazia encontrada
      if (vetor[posicao] == null) {
        vetor[posicao] = letra;
      } else {
        // Se o vetor estiver completamente cheio, encerra o loop
        break;
      }
    }
  }
}

console.log(vetor);
