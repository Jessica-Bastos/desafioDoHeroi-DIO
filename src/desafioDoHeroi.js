let nameHero = "Margot"

let levelHero = 10001

console.log("Nome: " + nameHero)
console.log("Level: " + levelHero)

if(levelHero < 1000) {
    console.log ("O herói de nome " + nameHero + " está no nível de Ferro")
}

else if (levelHero >=1000 && levelHero <= 2000) {
    console.log ("O herói de nome " + nameHero + " está no nível de Bronze")
}

else if (levelHero >=2001 && levelHero <= 5000) {
    console.log ("O herói de nome " + nameHero + " está no nível de Prata")
}

else if (levelHero >=5001 && levelHero <= 7000) {
    console.log ("O herói de nome " + nameHero + " está no nível de Ouro")
}

else if (levelHero >=7001 && levelHero <= 8000) {
    console.log ("O herói de nome " + nameHero + " está no nível de Platina")
}

else if (levelHero >=8001 && levelHero <= 9000) {
    console.log ("O herói de nome " + nameHero + " está no nível de Imortal")
}

else if (levelHero >=9001 && levelHero <= 10000) {
    console.log ("O herói de nome " + nameHero + " está no nível de Ascendente")
}

else {
    console.log ("O herói de nome " + nameHero + " está no nível de Radiante")
}


