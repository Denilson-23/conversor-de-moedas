
async function cliqueiNoBotao() {

    let valorDoImput = document.querySelector("input").value
    let valorDaMoeda = document.querySelector(".convertido").value
    let valorDaMoeda1 = document.querySelector(".converter").value

    const date = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())
    const valorDoDolar = date.USDBRL.high
    const valorDoEuro = date.EURBRL.high

    if (valorDaMoeda == "real" && valorDaMoeda1 == "real") {
        let real = document.querySelector(".real").innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoImput)
        let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoImput)


    } else if (valorDaMoeda == "dolar" && valorDaMoeda1 == "dolar") {
        let real = document.querySelector(".real").innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoImput)
        let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoImput)


    } else if (valorDaMoeda == "euro" && valorDaMoeda1 == "euro") {
        let real = document.querySelector(".real").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoImput)
        let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoImput)


    } else if (valorDaMoeda == "dolar" && valorDaMoeda1 == "real") {
        let real = document.querySelector(".real").innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoImput)
        let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoImput / valorDoDolar)

    } else if (valorDaMoeda == "euro" && valorDaMoeda1 == "real") {
        let real = document.querySelector(".real").innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoImput)
        let euro = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoImput / valorDoEuro)

    } else if (valorDaMoeda == "dolar" && valorDaMoeda1 == "euro") {
        let euro = document.querySelector(".real").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoImput)
        let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoImput * valorDoEuro / valorDoDolar)

    } else if (valorDaMoeda == "euro" && valorDaMoeda1 == "dolar") {
        let real = document.querySelector(".real").innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoImput)
        let euro = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoImput * valorDoDolar / valorDoEuro)

    } else if (valorDaMoeda == "real" && valorDaMoeda1 == "dolar") {
        let real = document.querySelector(".real").innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoImput)
        let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoImput * valorDoDolar)

    } else if (valorDaMoeda == "real" && valorDaMoeda1 == "euro") {
        let euro = document.querySelector(".real").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoImput)
        let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoImput * valorDoEuro)

    } else { }
}


function troquei() {
    let valorDoImput = document.querySelector("input").value
    let valorDaMoeda = document.querySelector(".convertido").value

    if (valorDaMoeda == "moeda") {

        let moeda2 = document.querySelector(".moeda2").innerHTML = "Moéda Convertida"
        let imagem = document.querySelector(".img-eua")
        imagem.src = 'accents/imagen_moeda-removebg-preview.png'
        let valor2 = document.querySelector(".dolar").innerHTML = "0.0"

    } else if (valorDaMoeda == "real") {

        let moeda2 = document.querySelector(".moeda2").innerHTML = "Real"
        let imagem = document.querySelector(".img-eua")
        imagem.src = ' accents/brasil 2.png'

    } else if (valorDaMoeda == "dolar") {

        let moeda2 = document.querySelector(".moeda2").innerHTML = "Dólar americano"
        let imagem = document.querySelector(".img-eua")
        imagem.src = './accents/estados-unidos (1) 1.png'

    } else if (valorDaMoeda == "euro") {

        let moeda2 = document.querySelector(".moeda2").innerHTML = "Euro"
        let imagem = document.querySelector(".img-eua")
        imagem.src = './accents/Design sem nome 3.png'

    }
    cliqueiNoBotao()
}
function troquei2() {
    let valorDaMoeda1 = document.querySelector(".converter").value

    if (valorDaMoeda1 == "real") {

        let moeda2 = document.querySelector(".moeda3").innerHTML = "Real"
        let imagem = document.querySelector(".img-bra")
        imagem.src = ' accents/brasil 2.png'

    } else if (valorDaMoeda1 == "dolar") {

        let moeda2 = document.querySelector(".moeda3").innerHTML = "Dólar americano"
        let imagem = document.querySelector(".img-bra")
        imagem.src = './accents/estados-unidos (1) 1.png'

    } else if (valorDaMoeda1 == "euro") {

        let moeda2 = document.querySelector(".moeda3").innerHTML = "Euro"
        let imagem = document.querySelector(".img-bra")
        imagem.src = './accents/Design sem nome 3.png'

    } else if (valorDaMoeda1 == "moeda") {

        let moeda2 = document.querySelector(".moeda3").innerHTML = "Moéda á Converter"
        let imagem = document.querySelector(".img-bra")
        imagem.src = 'accents/imagen_moeda-removebg-preview.png'
        let valor2 = document.querySelector(".real").innerHTML = "0.0"
    }
    cliqueiNoBotao()
}



