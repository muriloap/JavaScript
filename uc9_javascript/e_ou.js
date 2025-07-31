let prompt = require('prompt-sync')()

// Operador E e operador OU nas condições

// exemploPagamento()
// atividadeCNH()
// exemploLogin()
// exemploResposta()
// atividadeTimes()
// atividadeCrime()

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

function atividadeCrime(){
    let pontos = 0
    console.log("===== INVESTIGAÇÃO CRIMINAL =====")
    let telefonouVitima = parseInt(prompt("Telefonou para a vítima?\nSIM(1) NÃO(2): "))

    if (telefonouVitima == 1){
        pontos++
    }
    else if (telefonouVitima == 2){
        pontos = pontos
    }

    let esteveLocal = parseInt(prompt("Esteve no local do crime?\nSIM(1) NÃO(2): "))
    
    if (esteveLocal == 1){
        pontos++
    }
    else if (esteveLocal == 2){
        pontos = pontos
    }

    let moraPerto = parseInt(prompt("Mora perto da vítima?\nSIM(1) NÃO(2): "))

    if (moraPerto == 1){
        pontos++
    }
    else if (moraPerto == 2){
        pontos = pontos
    }

    let deviaVitima = parseInt(prompt("Devia para a vítima?\nSIM(1) NÃO(2): "))

    if (deviaVitima == 1){
        pontos++
    }
    else if (deviaVitima == 2){
        pontos = pontos
    }

    let trabalhouComVitima = parseInt(prompt("Trabalhou com a vítima?\nSIM(1) NÃO(2): "))

    if (trabalhouComVitima == 1){
        pontos++
    }
    else if (trabalhouComVitima == 2){
        pontos = pontos
    }

     if (pontos == 2){
        console.log(`O sujeito obteve ${pontos} pontos e está classificado como "Suspeito(a)"`)
    }
    else if (pontos == 3 || pontos == 4){
        console.log(`O sujeito obteve ${pontos} pontos e está classificado como "Cúmplice"`)
    }
    else if (pontos == 5){
        console.log(`O sujeito obteve ${pontos} pontos e está classificado como "Assassino"`)
    }
    else {
        console.log(`O sujeito obteve ${pontos} pontos e está classificado como "Inocente"`)
    }
}