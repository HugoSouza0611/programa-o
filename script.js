const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Acabar com a pobreza, porém não será um país de primeiro mundo.",
                afirmação: "Você tirou a fome da somália, porem ainda temos diversos paises em situações piores",
            },
            {
                texto: "Descobrir a cura do câncer e HIV, mas uma nova doença surgirá.",
                afirmação: "Parabens, você descobriu a cura de uma das piores doenças do mundo, porém se prepare uma pior esta por vir",

            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Trazer uma espécie extinta, porém outra terá que ser extinta no lugar. ",
                afirmação: "Escolha a especie para ser trazida devolta e escolha uma para ser extinta",
            },
            {
                texto: "Salvar o meio ambiente mas perder alguém da sua família.",
                afirmação: "afirmação",

            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [

            {
                texto: "Criar uma nova tecnologia, porém não será reconhecido.",
                afirmação: "afirmação",
            },
            {
                texto: "Viver com a mesma tecnologia para sempre.",
                afirmação: "afirmação",

            },
        ]
    },
]

let atual = 0
let perguntaAtual;
 let historiaFinal = "";
function mostraPerguntas() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const pergunta of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = pergunta.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(pergunta));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(pergunta) {
    const afirmacoes = pergunta.afirmação;
    historiaFinal += afirmacoes +" ";
    atual++;
    mostraPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPerguntas()
