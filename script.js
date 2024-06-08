

let valorDoDolar = 5.20
let valorDoEuro = 5.63

function cliqueiNoBotao() {
    
    let valorDoImput = document.querySelector("input").value
    let valorDaMoeda = document.querySelector(".convertido").value
    let valorDaMoeda1 = document.querySelector(".converter").value
    
    if (valorDaMoeda == "real" && valorDaMoeda1 == "real" ) {
        let real = document.querySelector(".real").innerHTML=  new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoImput)
        let dolar = document.querySelector(".dolar").innerHTML =  new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoImput)
        console.log("ta igual")
      
    } else{console.log("else igual")  }


    if (valorDaMoeda == "dolar" && valorDaMoeda1 == "dolar" ) {
        let real = document.querySelector(".real").innerHTML=  new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoImput)
        let dolar = document.querySelector(".dolar").innerHTML =  new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoImput)
        console.log("ta igual")
      
    } else{console.log("else igual")  }

    if (valorDaMoeda == "euro" && valorDaMoeda1 == "euro" ) {
        let real = document.querySelector(".real").innerHTML=  new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoImput)
        let dolar = document.querySelector(".dolar").innerHTML =  new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoImput)
        console.log("ta igual")
      
    } else{console.log("else igual")  }

    if (valorDaMoeda == "dolar" && valorDaMoeda1 == "real" ) {
        ColocaraNaTela(valorDoImput, valorDaMoeda)
      console.log( "funcao1")
    } else {console.log("else 1")  }

  


    if (valorDaMoeda == "euro" && valorDaMoeda1 == "real") {
        ColocaraNaTela2(valorDoImput, valorDaMoeda)
        console.log( "funcao2")
    }else {console.log("else 2")  }


    
    if (valorDaMoeda == "dolar" && valorDaMoeda1 == "euro") {
        ColocaraNaTela3(valorDoImput, valorDaMoeda1) 
        console.log( "funcao3")
    }else {console.log("else 3")  }


    if (valorDaMoeda == "euro" && valorDaMoeda1 == "dolar") {
        ColocaraNaTela4(valorDoImput, valorDaMoeda1) 
        console.log( "funcao4")
    }else {console.log("else 4")  }


    if (valorDaMoeda == "real" && valorDaMoeda1 == "dolar") {
        ColocaraNaTela5(valorDoImput, valorDaMoeda1) 
        console.log( "funcao5")
    }else {console.log("else 5")  }

    if (valorDaMoeda == "real" && valorDaMoeda1 == "euro") {
        ColocaraNaTela6(valorDoImput, valorDaMoeda1) 
        console.log( "funcao 6")
    }else {console.log("else 6")  }
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
    let euro = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorDoImput / valorDoEuro)
}

function ColocaraNaTela3(valorDoImput, valorDaMoeda1) {
    let euro = document.querySelector(".real").innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorDoImput)
    let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorDoImput * valorDoEuro / valorDoDolar)

}


function ColocaraNaTela4(valorDoImput, valorDaMoeda) {
    let real = document.querySelector(".real").innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorDoImput)
    let euro = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorDoImput * valorDoDolar / valorDoEuro)
}

function ColocaraNaTela5(valorDoImput, valorDaMoeda) {
    let real = document.querySelector(".real").innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorDoImput)
    let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDoImput * valorDoDolar)
}

function ColocaraNaTela6(valorDoImput, valorDaMoeda1) {
    let euro = document.querySelector(".real").innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorDoImput)
    let dolar = document.querySelector(".dolar").innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDoImput * valorDoEuro )
}



function troquei() {
    let valorDoImput = document.querySelector("input").value
    let valorDaMoeda = document.querySelector(".convertido").value

    if (valorDaMoeda == "moeda") {
        
        let moeda2 = document.querySelector(".moeda2").innerHTML = "Moéda Convertida"

        let imagem = document.querySelector(".img-eua")
        imagem.src = 'accents/imagen_moeda-removebg-preview.png'
        
        let valor2 = document.querySelector(".dolar").innerHTML = "0.0"
    }


    if (valorDaMoeda == "real") {
        
        let moeda2 = document.querySelector(".moeda2").innerHTML = "Real"

        let imagem = document.querySelector(".img-eua")
        imagem.src =' accents/brasil 2.png'
    }
    if (valorDaMoeda == "dolar") {
        
        let moeda2 = document.querySelector(".moeda2").innerHTML = "Dólar americano"

        let imagem = document.querySelector(".img-eua")
        imagem.src = './accents/estados-unidos (1) 1.png'
    }
    if (valorDaMoeda == "euro") {
        
        let moeda2 = document.querySelector(".moeda2").innerHTML = "Euro"

        let imagem = document.querySelector(".img-eua")
        imagem.src = './accents/Design sem nome 3.png'
    }


    cliqueiNoBotao()
}

function troquei2(){
    let valorDaMoeda1 = document.querySelector(".converter").value

    if (valorDaMoeda1 == "real") {
        
        let moeda2 = document.querySelector(".moeda3").innerHTML = "Real"

        let imagem = document.querySelector(".img-bra")
        imagem.src =' accents/brasil 2.png'
    }
    if (valorDaMoeda1 == "dolar") {
        
        let moeda2 = document.querySelector(".moeda3").innerHTML = "Dólar americano"

        let imagem = document.querySelector(".img-bra")
        imagem.src = './accents/estados-unidos (1) 1.png'
    }
    if (valorDaMoeda1 == "euro") {
        
        let moeda2 = document.querySelector(".moeda3").innerHTML = "Euro"

        let imagem = document.querySelector(".img-bra")
        imagem.src = './accents/Design sem nome 3.png'
    }
    if (valorDaMoeda1 == "moeda") {
        
        let moeda2 = document.querySelector(".moeda3").innerHTML = "Moéda á Converter"

        let imagem = document.querySelector(".img-bra")
        imagem.src = 'accents/imagen_moeda-removebg-preview.png'

        let valor2 = document.querySelector(".real").innerHTML = "0.0"
    }
    cliqueiNoBotao()
}



