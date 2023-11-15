//coloca um vetor com 100 números todos com valor false. 
var vetorprimo = []
for (var j = 0; j < 100; j++){
    vetorprimo.push(false)
}
//multiplica um número por outro mudando o valor para true quando alguma mútiplicação der o valor dele. 
console.log(vetorprimo)
for (var j = 2; j < 100; j++){
for (var i = 2; i < 100; i++){
    //console.log(vetorbool[i])
    var m = i * j;
    vetorprimo[m]="true"
    }
}

console.log(vetorprimo)

//imprime a frase mostrando quais números são primos ou não. 
for (var i = 0; i < 100; i++){
if (vetorprimo[i] == "true") {
    console.log(`O número ${i} não é primo.`)
}
    else {
        console.log(`o número ${i} é primo.`)
    }
}


