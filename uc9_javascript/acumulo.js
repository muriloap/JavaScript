// acumular valores em uma variável

let personagem = "Murilo"
let moedas = 0

console.log("Bem-vindo ao jogo")
console.log(personagem + ": " + moedas + " Moedas")

moedas = 1
console.log(personagem + ": " + moedas + " Moedas")

// moedas += 1          (Usar quando for adicionar mais que 1, como adicionar 2, 3...)
// moedas++             (Mais viável para adicionar +1)
// moedas = moedas + 1  (Menos viável)
moedas++
console.log(personagem + ": " + moedas + " Moedas")

moedas++
moedas++
moedas += 5
moedas -= 2
moedas += 3
console.log(personagem + ": " + moedas + " Moedas")

moedas += 10
moedas = (moedas / 2)
moedas++ // salvou o jogo DEPOIS que pegou
console.log(personagem + ": " + moedas + " Moedas")
console.log("----------CHECKPOINT----------")
let checkpoint

checkpoint = moedas
moedas = (moedas * 2)
console.log(personagem + ": " + moedas + " Moedas")

// MORREU
moedas = 0
console.log(personagem + " MORREU: " + moedas + " Moedas")

// REVIVEU
console.log(personagem + " REVIVEU com: " + checkpoint + " Moedas")