console.log(warframes);


document.addEventListener('DOMContentLoaded', () => {
    campo=document.getElementById("campo");
    jogador=document.getElementById("jogador");

    campo.innerHTML=`<h1>Nome: ${warframes[0].nome}</h1>
    <p>Saude: ${warframes[0].saude}</p>
    <p>Escudos: ${warframes[0].escudos}</p>
    <p>Armadura: ${warframes[0].armadura}</p>
    <p>Energia: ${warframes[0].energia}</p>
    <p>Lançamento: ${warframes[0].lancamento}</p>
    `;

    jogador.innerHTML=`<h1>Nome: ${warframes[1].nome}</h1>
    <p>Saude: ${warframes[1].saude}</p>
    <p>Escudos: ${warframes[1].escudos}</p>
    <p>Armadura: ${warframes[1].armadura}</p>
    <p>Energia: ${warframes[1].energia}</p>
    <p>Lançamento: ${warframes[1].lancamento}</p>
    `;

}); 

//SITEMA DE DECK
function gerarCartas(quantidade, maximo) {
    const cartas = [];
    for (let i = 0; i <= maximo; i++) {
        cartas.push(i);
    }

    // Embaralha o array usando o algoritmo Fisher-Yates
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }

    return cartas;
}

// Gera um array com todas as cartas embaralhadas
const todasAsCartas = gerarCartas(20, 29);

// Divide o array em dois arrays menores com exatamente 10 elementos cada
const cardCampo = todasAsCartas.slice(0, 10);
const cardJogador = todasAsCartas.slice(10, 20); // Ajustado para pegar os próximos 10 elementos

console.log(cardCampo);
console.log(cardJogador);

//SISTEMA DE COMPARAÇÃO
let resultado = false
let warframeCampo = Object.values(warframes[cardCampo[Math.floor(Math.random()*(9-0+1)+0)]])
let warframeJogador = Object.values(warframes[cardJogador[Math.floor(Math.random()*(9-0+1)+0)]])
for(let dado in warframeCampo){
    if(warframeCampo[dado] < warframeJogador[dado]){
        resultado=true;
    }
    console.log("Campo:"+warframeCampo[dado]+" Jogador:"+warframeJogador[dado])  
    
}
console.log(resultado)