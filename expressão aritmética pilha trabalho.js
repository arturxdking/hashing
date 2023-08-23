// Artur Vieira Silva 3º ADS matutino 

function verificaExpressao(expressao) {

    let pilha = []

    for (let i = 0; i < expressao.length; i++) {

        if (expressao[i] == "(" || expressao[i] == "[" || expressao[i] == "{") {
            
            pilha.push(expressao[i])

        } 
        
        else if (expressao[i] == ")" || expressao[i] == "]" || expressao[i] == "}") {

            if (pilha.length == 0) {
                return false // se a pilha estiver vazia, expressão incorreta
            } 
            
            else {

                let simboloAbertura = ''
                let simboloFechamento = expressao[i]

                if (simboloFechamento == ")") {
                    simboloAbertura = "("
                } 
                
                else if (simboloFechamento == "]") {
                    simboloAbertura = "["
                } 
                
                else if (simboloFechamento == "}") {
                    simboloAbertura = "{"
                }

                let ultimoSimbolo = pilha.pop()

                if (ultimoSimbolo != simboloAbertura) {
                    return false // expressão incorreta
                }
            }
        }
    }

    return pilha.length == 0 // se a pilha estiver vazia, expressão correta
}

let vetor = ["]"]
console.log(verificaExpressao(vetor))