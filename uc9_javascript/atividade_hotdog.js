let salsicha = 3.50
let pure = 2.15
let salada = 1.90
let pao = 0.90
let batata_palha = 0.50
let fixos = pao + batata_palha

let hdSimples = fixos + salsicha + pure
let hdDuplo = fixos + (salsicha * 2) + pure + salada
let hdEspecial = fixos + (salsicha * 3) + pure + pure

console.log("----BEM-VINDO AO HOTGOD DO JAPA----")
console.log("-------------CARDÁPIO--------------")
console.log("Hotdog Simples: Pão, Salsicha, Purê e Batata palha.  \nR$" + hdSimples.toFixed(2))
console.log("Hotdog Duplo: Pão, 2 Salsicha, Purê, salada e Batata palha. \nR$" + hdDuplo.toFixed(2))
console.log("Hotdog Especial: Pão, 3 Salsicha, Purê em dobro e Batata palha. \nR$" + hdEspecial.toFixed(2))

// toFixed para mostrar apenas duas casas decimais