// Permitir o input do usuário em JS
let prompt = require('prompt-sync')()
let moment = require('moment')

modoHardAmericano()
modoHardBrasileiro()

function atividadeNome(){
    let nome = prompt("Digite o seu nome: ")
    let sobrenome = prompt("Digite o seu sobrenome: ")
    let nome_completo = nome+" "+sobrenome
    
    console.log("Seja Bem-vindo(a) "+nome_completo)
}

function atividadeIdade(){
    let idade = parseInt(prompt("Digite sua idade: "))
    // idade = parseInt(idade)
    let idade_futura = idade + 5
    console.log("Daqui 5 anos você terá: "+ idade_futura)
}

function atividadeNascimento(){
    let anoNascimento = parseInt(prompt("Digite seu ano de nasciento: "))
    let idadeHoje = 2025 - anoNascimento
    console.log("Você tem "+idadeHoje+" anos")
}

function atividadeSoma(){
    let n1 = parseInt(prompt("Digite o primeiro número: "))
    let n2 = parseInt(prompt("Digite o segundo número: "))
    let soma = n1 + n2
    console.log("A soma dos números é igual a "+soma)
}

function atividadeConverter() {
    let metro = parseInt(prompt("Digite a distância em metros: "))
    let km = metro / 1000
    console.log("A distânca de "+metro+" para Kilômetros é de "+km+"km") 
}

function atividadeMedia(){
    let nota1 = parseInt(prompt("Digite a primeira nota: "))
    let nota2 = parseInt(prompt("Digite a segunda nota: "))
    let media = (nota1 + nota2) / 2
    console.log("A média do aluno é "+media)
}

function atividadeTabuada(){
    let numero = parseInt(prompt("Digite um número: "))
    let x1 = numero * 1
    let x2 = numero * 2
    let x3 = numero * 3
    let x4 = numero * 4
    let x5 = numero * 5
    let x6 = numero * 6
    let x7 = numero * 7
    let x8 = numero * 8
    let x9 = numero * 9
    let x10 = numero * 10
    
    console.log("A tabuada desse número é:")
    console.log(numero+"x1 = "+x1)
    console.log(numero+"x2 = "+x2)
    console.log(numero+"x3 = "+x3)
    console.log(numero+"x4 = "+x4)
    console.log(numero+"x5 = "+x5)
    console.log(numero+"x6 = "+x6)
    console.log(numero+"x7 = "+x7)
    console.log(numero+"x8 = "+x8)
    console.log(numero+"x9 = "+x9)
    console.log(numero+"x10 = "+x10)
}

function modoHardAmericano(){
    let dateToday = moment().format("MMM Do YY")
    let weekBefore = moment().subtract(7, 'days').calendar()
    console.log("Today is: "+dateToday)
    console.log("1 week before: "+weekBefore)
}

function modoHardBrasileiro(){
    
    moment.locale('pt-br')
    let dataHoje = moment().format("MMM Do YY")
    let mesesAtras = moment().subtract(2, 'month').calendar()
    console.log("Hoje é: "+dataHoje)
    console.log("2 meses atrás é: "+mesesAtras)
}