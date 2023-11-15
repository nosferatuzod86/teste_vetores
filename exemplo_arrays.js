var num = [2, 3, 4, 5, 6, 7]
console.log(num[4])
num.push(8)
console.log(num)
num.push(1)
console.log(num)
num.sort()
console.log(num)

for (var i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

num.push(4)

//na linha abaixo vai mostrar o conteúdo da array de forma simplificada. 
for (var i in num) {
    console.log(num[i])
}

console.log(num.indexOf(4))

console.log(num)

console.log(num.length)

var vetor2 = []

for (var j = 0; j < 30; j++){
    
    if (j > 25){
        console.log(`A posição ${j} vai pra dentro do vetor.`)
        vetor2.push(j*3)
    }

}

console.log(vetor2)

console.log('kakaroto maldito')

console.log(vetor2.reverse())

console.log('kakaroto maldito2')

console.log(vetor2.sort(function(){return 0.5 - Math.random()}))

console.log('kakaroto maldito3')

vetor2.unshift(99)

console.log(vetor2)

console.log('kakaroto maldito 4')

console.log(Math.max(...vetor2))

console.log(Math.min(...vetor2))

var paises = ["Nigeria", "Gana", "França"]

console.log(paises)

paises.splice(1, 2, "Haiti")

console.log(paises)

console.log(paises.join(" "))

var listapaises = (paises.join(""))

console.log(listapaises)

var tipo = typeof listapaises

console.log(tipo)

var tipo2 = typeof vetor2

console.log(tipo2)

//--- inserindo um valor a apagando os demais a frente do vetor sem precisar saber o numero de dados inseridos no vetor. 

var paises = ["França", "Inglaterra", "Bélgica", "Camarões", "Suíça"]

console.log(paises)

var numeroaux = paises.length

var campoinserido = 3

var numeroaux2 = (numeroaux - campoinserido)

console.log(numeroaux2)

paises.splice(campoinserido, numeroaux2, "Haiti")

console.log(paises)

//--- inseriu o valor Haiti no segundo campo e apagou todos os posteriores. 

var numeroprocurar = 995

var ifcontains = (vetor2.includes(numeroprocurar))

console.log(ifcontains)

//-------- busca com nomes

var nomeprocurar = "França"

var ifcontains2 = (paises.includes(nomeprocurar))

console.log(ifcontains2)

//paises.pop()
//paises.shift()

paises.splice(1,1)

console.log(paises)

var index123 = paises.indexOf("Haiti")

console.log(index123)