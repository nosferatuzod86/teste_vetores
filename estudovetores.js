var vetor1 = []

//function criarVetor() {

//    var res = window.document.getElementById('res')
//    var vetor1 = []
//    res.innerHTML += `<p>O vetor foi criado com sucesso.</p>`
//}

function inserirNumInicio() {
    var txtnum = window.document.getElementById('txtnumero')
    var num =Number(txtnum.value)
    var res = window.document.getElementById('res')
    vetor1.unshift(num)
    res.innerHTML = `<p>O vetor possui os seguintes números: ${vetor1}.</p>`
}
function inserirNumFinal() {
    var txtnum = window.document.getElementById('txtnumero2')
    var num2 =Number(txtnum.value)
    var res = window.document.getElementById('res')
    vetor1.push(num2)
    res.innerHTML = `<p>O vetor Possui os seguintes números: ${vetor1}.</p>`
}

function inserirNumAleatorio() {
    var res = window.document.getElementById('res')
    var randomNumero = Math.floor((Math.random() * (100))+1);
    vetor1.push(randomNumero)
    res.innerHTML = `<p>O valor aleatório foi inserido no vetor: ${vetor1}.</p>`
}

function inverterVetor() {
    var res = window.document.getElementById('res')
    vetor1.reverse()
    res.innerHTML = `<p>O vetor ficou da seguinte forma: ${vetor1}.</p>`
}
function ordenarAleatorio() {

    var res = window.document.getElementById('res')
    vetor1.sort(function(){return 0.5 - Math.random()})
    res.innerHTML = `<p>O vetor ficou da seguinte forma: ${vetor1}.</p>`
}

function tamanhoVetor() {
    var res = window.document.getElementById('res')
    var tamanho = (vetor1.length)
    res.innerHTML = `<p>O vetor tem ${tamanho} casas.</p>`
    //res.innerHTML <br>
    res.innerHTML += `<p>O vetor está com a seguinte forma: ${vetor1}.</p>`
}

function ordenarCrescenteVetor() {
    var res = window.document.getElementById('res')
    vetor1.sort(function(a, b){
        return a - b;
    })
    res.innerHTML = `<p>O vetor ficou da seguinte forma: ${vetor1}.</p>`
}
function ordenarAleatorio() {

var res = window.document.getElementById('res')
vetor1.sort(function(){return 0.5 - Math.random()})
res.innerHTML = `<p>O vetor ficou da seguinte forma: ${vetor1}.</p>`
}

function tamanhoVetor() {
    var res = window.document.getElementById('res')
    var tamanho = (vetor1.length)
    res.innerHTML = `<p>O vetor tem ${tamanho} casas.</p>`
    //res.innerHTML <br>
    res.innerHTML += `<p>O vetor está com a seguinte forma: ${vetor1}.</p>`
}

function ordenarCrescenteVetor() {
    var res = window.document.getElementById('res')
    vetor1.sort(function(a, b){
       return a - b;
    })
    res.innerHTML = `<p>O vetor ficou da seguinte forma: ${vetor1}.</p>`
    }        

function ordenarDescrescenteVetor() {
    var res = window.document.getElementById('res')
    vetor1.sort(function(a, b){
        return a - b;
    })
    vetor1.reverse()
    res.innerHTML = `<p>O vetor ficou da seguinte forma: ${vetor1}.</p>`
}

function minVetor() {
    var res = window.document.getElementById('res')
    var min = Math.min(...vetor1)
    res.innerHTML = `<p>O menor número dentro do vetor é ${min}.</p>`
    res.innerHTML += `<p>O vetor ficou da seguinte forma: ${vetor1}.</p>`
}
function maxVetor() {
    var res = window.document.getElementById('res')
    var max = Math.max(...vetor1)
    res.innerHTML = `<p>O maior número dentro do vetor é ${max}.</p>`
    res.innerHTML += `<p>O vetor ficou da seguinte forma: ${vetor1}.</p>`
}