//Testes

function txt(value){
    console.log(value)
}



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

/*----------------------------------------------------------------*/
//APRESENTAÇÃO DA CARTA

document.addEventListener('DOMContentLoaded', () => {
    campo=document.getElementById("campo");
    jogador=document.getElementById("jogador");
    for (let i = 0; i < 10; i++){
        jogador.innerHTML+=`<img src="cartas/${cardJogador[i]}.jpg" alt="" id="carta${i}" onclick="selecCard(${i})" class="escolha">`
    }
});
/*----------------------------------------------------------------*/
//SISTEMA DE TURNO
let turno = 0

for (let i = 0; i < 10; i++){
    console.log(i)
    if (turno == 0){
        /*----------------------------------------------------------------*/

        //CARTA SELECIONADA

        function selecCard(num) {
            const popup = document.createElement('div');
            const controlador = document.createElement('div');
            popup.classList.add('popup');
            popup.id = "fechar";
            controlador.classList.add("controlador");
            popup.innerHTML = `<img src="cartas/${cardJogador[num]}.jpg" alt="" id="carta0" onclick="" class="imgPopUp">`
            controlador.innerHTML += `<h1> Selecione um Atributo </h1>`
            for (let i = 0; i <= 4; i++){
                controlador.innerHTML += `<div class="chose" id="chose${i}" onclick="jogar(${num},${i+1})"></div`
            }
            controlador.innerHTML += `<img src="x.png" alt="" id"" onclick="fechar()" class="x">`
            popup.appendChild(controlador)
            
            document.body.appendChild(popup);
        }

        function fechar(){
            const popup = document.getElementById("fechar");
            document.body.removeChild(popup);
            
        }
        /*----------------------------------------------------------------*/

        //SELECIONAR CARTA

        let warframeCampo = Object.values(warframes[cardCampo[Math.floor(Math.random()*(9-0+1)+0)]])
        function player(num,atr){
            let warframeJogador = Object.values(warframes[cardJogador[num]])
            const carta = document.getElementById('carta'+num);
            fechar();
            carta.remove();
            console.log(warframeJogador)
            console.log(warframeJogador[atr])
            return(warframeJogador[atr])
        }

        function jogar(num,atr){
            retorno=player(num,atr);
            if (retorno > warframeCampo[atr]){
                console.log("Você Ganhou!!")
            }else{
                console.log("Você Perdeu!!")
            }
            turno=1;
        }
        
    }else{
        turno=0
    }
}
console.log(turno)









