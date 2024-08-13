const caixaPrincipal=document.querySelector( '.caixa-principal');
const caixaPerguntas=document.querySelector( '.caixa-perguntas');
const caixaAlternativas=document.querySelector( '.caixa-alternativas');
const caixaResultado=document.querySelector( '.caixa-resultado');
const textoResultado=document.querySelector( '.caixa-resultado');

const perguntas = [
    { enunciado: "No âmbito social, você prefere:"
        alternativas:[

     }
        
    { 
    texto:"Alternativa 1",
        afirmação: "afirmação",   }
        { texto: "Alternativa 2",
        afirmação: "afirmação",

    },
]
        {  enunciado: "No âmbito ambietal, você prefere:"
        alternativas: [

     }
        
    { texto: "Alternativa 3",
        afirmação: "afirmação",

    } { texto: "alternativa 4",
        afirmação: "afirmação",
    },

]
{  enunciado: "No âmbito tecnológico, você prefere:"
alternativas: [

}

{ texto: "Alternativa 5",
afirmação: "afirmação",

} { texto: "alternativa 6",
afirmação: "afirmação",
]
},
]

let atual= 0
let perguntaAtual;
function mostraPerguntas(){
    perguntaAtual= perguntas[atual];
    caixaPerguntas.textContent= perguntaAtual.enunciado;
}
mostraPerguntas();