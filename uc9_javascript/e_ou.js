let prompt = require('prompt-sync')()

// Operador E e operador OU nas condições

// exemploPagamento()
// atividadeCNH()
// exemploLogin()
// exemploResposta()
atividadeTimes()

function exemploPagamento(){

    let pagamento = prompt("Selecione: crédito, débito, pix ou dinheiro")
 
    if( pagamento == "credito" ){
        console.log("Você selecionou o crédito")
    }else if( pagamento == "debito" ){
        console.log("Você selecionou o debito")
    }else if( pagamento == "pix" ){
        console.log("Você selecionou o pix")
    }else if( pagamento == "dinheiro" ){
        console.log("Você selecionou o dinheiro")
    }else{
        console.log("FORMA DE PAGAMENTO NÃO DISPONÍVEL")
    }
}

function atividadeCNH() {
    let idade = parseInt(prompt("Digite sua idade: "))

    if (idade >= 18 && idade <=65){
        console.log(`Com ${idade} anos você já pode tirar CNH`)
    }
    else if (idade < 18){
        console.log(`Com ${idade} anos você não pode tirar CNH`)
    }
    else if (idade >65 && idade <=120){
        console.log("Você deve fazer um teste especial para renovar a CNH")
    }
    else {
        console.log("Idade inválida")
    }
}

function exemploLogin(){
    let usuario = prompt("Digite seu usuário: ")
    let senha = prompt("Digite sua senha: ")
// && só funciona se OS DOIS forem iguais
    if (usuario == "admin" && senha == "123"){
        console.log("Acesso concedido!")
    }
    else{
        console.log("Usuário ou senha incorretos!")
    }
    
}

function exemploResposta(){
    let resposta = prompt("Deseja cadastrar o débito automático? ")

    if (resposta == "sim" || resposta == "SIM" || resposta == "Sim"){
        console.log("Débito cadastrado com sucesso!")
    }
    else{
        console.log("Não será cadastrado")
    }
}

function atividadeTimes(){
    let time1 = prompt("Digite o nome do primeiro time: ")
    let golsTime1 = parseInt(prompt(`Digite a quantidade de gols do time ${time1}: `))
    let time2 = prompt("Digite o nome do segundo time: ")
    let golsTime2 = parseInt(prompt(`Digite a quantidade de gols do time ${time2}: `))
    
    if (golsTime1 > golsTime2){
        console.log(`O time vencedor foi: ${time1}\nPlacar: ${golsTime1} x ${golsTime2}`)
    }
    if (golsTime2 > golsTime1){
        console.log(`O time vencedor foi: ${time2}\nPlacar: ${golsTime1} x ${golsTime2}`)
    }
    if (golsTime1 == golsTime2){
        console.log(`Placar:\n${golsTime1} x ${golsTime2}\nEMPATE `)
    }
}