let nome1 = "Conrado"
let idade1 = 15
let cliente1 = false
let cafe1 = 187

let nome2 = "Murilo"
let idade2 = 19
let cliente2 = true
let cafe2 = 5

let somaCafe = cafe1 + cafe2
let faltam1 = 200 - cafe1
let faltam2 = 200 - cafe2

console.log("Olá!\nBem-vindo ao sistema de usuários do Conrado\nAbaixo estão as informações dos usuários cadastrados no sistema:\n\n")
console.log("---- Lista de usuários:")
console.log("1 - Nome: "+nome1+", idade: "+idade1+". É cliente: "+cliente1)
console.log("2 - Nome: "+nome2+", idade: "+idade2+". É cliente: "+cliente2+"\n")

console.log("---- Quantidade de cafés:")
console.log("O cliente "+nome1+" já tomou "+cafe1+" cafés!")
console.log("O cliente "+nome2+" já tomou "+cafe2+" cafés!\n")

console.log("---- Soma de cafés tomados:")
console.log("Juntos os clientes "+nome1+" e "+nome2+" tomaram "+somaCafe+" cafés!\n")

console.log("---- Quantos cafés falta para chegar em 200?")
console.log("Faltam "+faltam1+" para "+nome1)
console.log("Faltam "+faltam2+" para "+nome2+"\n\n")

console.log("----- ATIVIDADE EXTRA -----\n")

let novas_vendas1 = 15
let novas_vendas2 = 3
let final1 = novas_vendas1 + faltam1
let final2 = novas_vendas2 + faltam2

console.log("Após novas vendas, "+nome1+" comprou mais "+novas_vendas1+" cafés e ao todo tomou "+final1)
console.log("Após novas vendas, "+nome2+" comprou mais "+novas_vendas2+" cafés e ao todo tomou "+final2+"\n")

let desenbolso1 = 3.50 * final1
let desenbolso2 = 3.50 * final2

console.log("O usuário "+nome1+" Desenbolsou R$"+desenbolso1)
console.log("O usuário "+nome2+" Desenbolsou R$"+desenbolso2+"\n")

desconto1 = desenbolso1 / 2
desconto2 = desenbolso2 / 2

console.log("O usuário "+nome1+" teria um desconto de R$"+desconto1)
console.log("O usuário "+nome2+" teria um desconto de R$"+desconto2)