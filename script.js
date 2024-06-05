

let valorDoDolar = 5.20
let valorDoEuro = 5.63

function cliqueiNoBotao() {

    let valorDoImput = document.querySelector("input").value
    let valorDaMoeda = document.querySelector(".convertido").value
   


    if (valorDaMoeda == "dolar") {
        ColocaraNaTela(valorDoImput, valorDaMoeda)
        let moeda2 = document.querySelector(".moeda2").innerHTML = "Dólar americano"

        let imagem = document.querySelector(".img-eua")
        imagem.src = './accents/estados-unidos (1) 1.png'
    }
    if (valorDaMoeda == "euro") {
        ColocaraNaTela2(valorDoImput, valorDaMoeda)
        let moeda2 = document.querySelector(".moeda2").innerHTML = "Euro"

        let imagem = document.querySelector(".img-eua")
        imagem.src = './accents/Design sem nome 3.png'
    }
}

function ColocaraNaTela(valorDoImput, valorDaMoeda) {
    let real = document.querySelector(".real").innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDoImput)
    let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorDoImput / valorDoDolar)
}

function ColocaraNaTela2(valorDoImput, valorDaMoeda) {
    let real = document.querySelector(".real").innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDoImput)
    let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorDoImput / valorDoEuro)

}

function troquei() {
    let valorDoImput = document.querySelector("input").value
    let valorDaMoeda = document.querySelector(".convertido").value

    if (valorDaMoeda == "dolar") {
        ColocaraNaTela(valorDoImput, valorDaMoeda)
        let moeda2 = document.querySelector(".moeda2").innerHTML = "Dólar americano"

        let imagem = document.querySelector(".img-eua")
        imagem.src = './accents/estados-unidos (1) 1.png'
    }
    if (valorDaMoeda == "euro") {
        ColocaraNaTela2(valorDoImput, valorDaMoeda)
        let moeda2 = document.querySelector(".moeda2").innerHTML = "Euro"

        let imagem = document.querySelector(".img-eua")
        imagem.src = './accents/Design sem nome 3.png'
    }
}




