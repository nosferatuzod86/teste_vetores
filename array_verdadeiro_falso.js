var vetorbool = [false, true, true, false, true, false]
console.log(vetorbool[4])
console.log(vetorbool)
for (var i = 0; i < vetorbool.length; i++){
    //console.log(vetorbool[i])

if (vetorbool[i] == true) {
    console.log(`O número ${i} é verdadeiro.`)
}
    else {
        console.log(`o número ${i} é falso.`)
    }
}
