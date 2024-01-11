/* Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
ex: mago atacou usando magia
guerreiro atacou usando espada
  */

class adventureHero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        //console.log(`O ${this.tipo} atacou usando ${ataque}`) deu erro com o console aqui
    let ataque

        if(this.tipo == "mago") { ataque = "Magia"}
        else if(this.tipo == "guerreiro") {ataque = "Espada"}
        else if(this.tipo == "monge") {ataque = "Artes marciais"}
        else if(this.tipo == "ninja") {ataque = "Shuriken"}
        

        console.log(`O herói ${this.nome}, da classe ${this.tipo} atacou usando ${ataque}.`)

    }
}

let mago = new adventureHero("Presto", 17, "mago")
let guerreiro = new adventureHero("Katniss", 19, "guerreiro")
let monge = new adventureHero("Rafaela", 25, "monge")
let ninja = new adventureHero("Jackie Chan", 50, "ninja")


mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()



