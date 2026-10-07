import { aleatorio } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";




const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter e também gerar imagens e áudios hiper-realistas. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "preocupado"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "entusiasmado"
            },
            {
                texto: "Quero entender melhor como essa tecnologia funciona.",
                afirmacao: "curioso"
            },
            {
                texto: "Preciso descobrir se essa tecnologia pode ser usada com segurança.",
                afirmacao: "cauteloso"
            }
        ]
    },
    {
        enunciado: "Com a descoberta dessa tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula, ela pede que você escreva um trabalho sobre o uso da tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para encontrar informações relevantes para o trabalho e explicá-las em uma linguagem que facilite o entendimento.",
                afirmacao: "uso_responsavel"
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, em algumas pesquisas na internet e em seus próprios conhecimentos sobre o tema.",
                afirmacao: "pesquisa_autonoma"
            },
            {
                texto: "Utilizar a IA como apoio para organizar as ideias, mas conferir as informações antes de colocá-las no trabalho.",
                afirmacao: "uso_critico"
            },
            {
                texto: "Pedir para a IA escrever todo o trabalho e entregá-lo sem fazer alterações.",
                afirmacao: "dependente"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e a escrita. Nessa conversa, também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Eu me preocupo com as pessoas que podem perder seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: "preocupado"
            },
            {
                texto: "Eu defendo a ideia de que a IA pode criar novas oportunidades de emprego e melhorar as habilidades humanas.",
                afirmacao: "otimista"
            },
            {
                texto: "Acredito que será necessário aprender novas habilidades para trabalhar junto com as tecnologias de IA.",
                afirmacao: "adaptacao"
            },
            {
                texto: "Acredito que empresas e governos devem criar regras para garantir que a IA seja utilizada de maneira justa no ambiente de trabalho.",
                afirmacao: "regulamentacao"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisa criar uma imagem no computador que represente o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de desenho, como o Paint.",
                afirmacao: "tradicional"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagens de IA.",
                afirmacao: "inovador"
            },
            {
                texto: "Criar uma imagem manualmente e depois utilizar a IA para aprimorar alguns detalhes.",
                afirmacao: "hibrido"
            },
            {
                texto: "Experimentar diferentes ferramentas de IA até encontrar uma forma criativa de representar minha ideia.",
                afirmacao: "criativo"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte. O andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazê-lo com a ajuda de uma IA. O problema é que o trabalho ficou totalmente igual ao texto gerado pelo chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso ter atenção, pois toda máquina pode cometer erros. Por isso, revisar o trabalho e contribuir com perspectivas pessoais é essencial.",
                afirmacao: "uso_responsavel"
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "dependente"
            },
            {
                texto: "Sugiro utilizar o texto da IA apenas como ponto de partida e reescrever as informações com nossas próprias palavras.",
                afirmacao: "uso_critico"
            },
            {
                texto: "Converso com o grupo sobre a importância de verificar as informações geradas pela IA antes de entregar o trabalho.",
                afirmacao: "colaborativo"
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();