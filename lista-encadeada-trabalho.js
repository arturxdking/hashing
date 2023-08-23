/* Fazer um programa com as seguintes funções de lista encadeada:
a)Mostrar todos os elementos da lista. ok
b)Remover o primeiro elemento da lista.
c)Inserir um elemento no início da lista.
d)Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
e)Remover um elemento de uma posição específica da lista. */

class No {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
    }
}

class Lista {
    constructor() {
        this.cabeca = null
    }

    adicionar(valor) {
        const novoNo = new No(valor)
        if (this.cabeca === null) {
            this.cabeca = novoNo
        } else {
            let atual = this.cabeca
            while (atual.proximo != null) {
                atual = atual.proximo
            }
            atual.proximo = novoNo
        }
    }

    deletar(posicao) {
        if (this.cabeca === null || posicao < 0) {
            throw new RangeError(`Sem item na posição ${posicao}`)
        }

        if (posicao === 0) {
            this.cabeca = this.cabeca.proximo
            return true
        }

        let atual = this.cabeca
        let anterior = null
        let i = 0

        while (atual != null && i < posicao) {
            anterior = atual
            atual = atual.proximo
            i++
        }

        if(atual != null){
            anterior.proximo = atual.proximo
            return true
        }
        throw new RangeError(`Sem item na posição ${posicao}`)
    }

// a)Mostrar todos os elementos da lista. ok

    valores(){
        let atual = this.cabeca
        let valores = []
        
        while(atual != null){
            valores.push(atual.valor)
            atual = atual.proximo
        }
        return valores
    }

// b)Remover o primeiro elemento da lista.

    removerPrimeiro(){

        if(this.cabeca!=null){
            this.cabeca = this.cabeca.proximo
        }else{
           console.log(`A lista não possui elementos para serem removidos`)
        }
    }

// c)Inserir um elemento no início da lista.

    adicionarNoInicio(valor){
        const novoNo = new No(valor)
        novoNo.proximo = this.cabeca
        this.cabeca = novoNo
    }

// d)Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.

    buscar(valor){
        let atual = this.cabeca
        let posicao = 0

        while(atual != null){
            if(atual.valor === valor){
                return console.log("A posição do elemento buscado é: " + posicao)
            }else{
                atual = atual.proximo
                posicao++
            }
        }
        return console.log("-1")
    }

// e)Remover um elemento de uma posição específica da lista.

    get(posicao) {
        if (posicao > -1) {
            let atual = this.cabeca
            let i = 0
            while (atual != null && i < posicao) {
                atual = atual.proximo
                i++
            }

            return atual != null ? atual.valor : undefined
        } else {
            return undefined;
        }
    }

}


const lista = new Lista()

lista.adicionar(1)
lista.adicionar(2)
lista.adicionar(3)
console.log(lista.valores())
lista.buscar(2)
lista.removerPrimeiro()
console.log(lista.valores())
lista.adicionarNoInicio(4)
console.log(lista.valores())
//lista.deletar(1)
//console.log(lista.valores())
console.log(lista.get(2))