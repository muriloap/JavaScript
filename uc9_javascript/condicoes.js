let prompt = require('prompt-sync')()

// Condições simples

// > maior
// < menor
// == igual
// >= maior igual
// <= menor igual
// != diferente
// || ou

// aprendizagem()
// atividadePeixes()
// atividadePositivoNegativo()
// atividadeDebitoCredito()
// atividadeCPF()
// atividadeSoma()
// atividadeCrescente()



function aprendizagem(){

    let idade = prompt("Digite sua idade: ")
    
    if(idade >= 18){
        console.log("Você é maior de idade")
    }
    else{
        console.log("Você é menor de idade")
    }
     
    let senha = prompt("Digite a senha do sistema: ")
    
    if (senha == "admin123"){
        console.log("Acesso autorizado!")
    }
    else{
        console.log("Acesso negado!")
    }
}

function atividadePeixes(){
    console.log("\n========== PEIXARIA ==========\n")
    console.log("O valor do peixe por kilo é de R$50,00.\nCaso passe de 100Kg o valor por kilo passa a ser R$55,90")

    let kilos = parseFloat(prompt("Digite a quantidade de kilos: "))
    
    let total 
    
    if(kilos > 100){
        total = kilos * 55.90
    }    
    else{
        total = kilos * 50
    }
    console.log("O valor total é de: R$"+total)
}

function atividadePositivoNegativo(){
    let numero = parseFloat(prompt("Digite um número positivo ou negativo: "))
    
    if (numero > 0){
        console.log("O número "+numero+" é positivo.")
    }
    if (numero < 0){
        console.log("O número "+numero+" é negativo.")        
    }
    if (numero == 0) {
        console.log("O número "+numero+" é neutro")
    }
}

function atividadeDebitoCredito(){
    let valor = parseFloat(prompt("Digite o Valor da compra: "))
    let debitoCredito = parseFloat(prompt("Débito(1)\ncrédito(2)\n: "))
    
    if (debitoCredito == 1){
        let desconto = valor - (valor * 0.1)
        console.log("O valor no débito fica: R$"+desconto)
    }
    if (debitoCredito == 2){
        let acresimo = valor + (valor * 0.05)
        console.log("O valor no crédito fica: R$"+acresimo)
    }
}

function atividadeCPF(){
    let cpf = prompt("Digite seu CPF sem pontuação: ")
    if (cpf.length > 11 || cpf.length < 11){
        console.log("O CPF está incorreto.")
    }
    else {
        console.log("O CPF está correto.")
    }
}
function atividadeSoma(){
    let n1 = parseFloat(prompt("Digite o primeiro número: "))
    let n2 = parseFloat(prompt("Digite o segundo número: "))
    let soma = n1 + n2 
    if (soma > 50){
        soma = soma + 10
        console.log("A soma dos números(com acrésimo de 10): "+soma)
    }
    else {
        soma = soma - 20
        console.log("A soma dos números(com subtração de 20): "+soma)
    }
}
function atividadeCrescente(){
    let n1 = parseFloat(prompt("Digite o primeiro número: "))
    let n2 = parseFloat(prompt("Digite o segundo número: "))
    if (n1 > n2){
        console.log("Na ordem crescente fica: "+n2+" "+n1)
    }
    if(n2 > n1){
        console.log("Na ordem crescente fica: "+n1+" "+n2)
    }
    if (n1 == n2)
        console.log("Na ordem crescente fica: "+n1+" "+n2)
}