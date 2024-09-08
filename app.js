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
//SELEÇÃO INIMIGA

/*----------------------------------------------------------------*/
function randomico1(){
    let randomico = Math.floor(Math.random()*(9-0+1)+0);
    return randomico;
}
function randomico2(){
    let selecRand = Math.floor(Math.random()*(5-1+1)+1);
    return selecRand;
}
campRand = randomico1()
selecRand=randomico2()
function personagem(){
    let warframeCampo = Object.values(warframes[cardCampo[campRand]])
    return(warframeCampo)
}
//APRESENTAÇÃO DA CARTA
let cont = 0;
function inimigoCarta(num,num2,num3,num4){
    cont++;
    if (cont>10){
        endWorld=document.body;
        console.log(endWorld)
        if(num3>num4){
            let child = endWorld.firstChild;
            while (child) {
                endWorld.removeChild(child);
                child = endWorld.firstChild;
            }
            endWorld.innerHTML=`<div id="win"><a href="index.html"><img src="index/MENU.png" alt="jogar" id="menu"></a></div>`;
        }else if(num3==num4){
            let child = endWorld.firstChild;
            while (child) {
                endWorld.removeChild(child);
                child = endWorld.firstChild;
            }
            endWorld.innerHTML=`<div id="draw"><a href="index.html"><img src="index/MENU.png" alt="jogar" id="menu"></a></div>`;
        }else{
            let child = endWorld.firstChild;
            while (child) {
                endWorld.removeChild(child);
                child = endWorld.firstChild;
            }
            endWorld.innerHTML=`<div id="lose"><a href="index.html"><img src="index/MENU.png" alt="jogar" id="menu"></a></div>`;
        }
    }
    
    function selecInimiga(){
        if (num2 == 1){
            return("saude")
        }else if(num2 == 2){
            return("escudos")
        }else if(num2 == 3){
            return("armadura")
        }else if(num2 == 4){
            return("energia")
        }else{
            return("lançamento")
        }
    }
    campo=document.getElementById("campo");
    campo.innerHTML=``;
    campo.innerHTML=`<img src="cartas/${cardCampo[num]}.jpg" alt="" class="inimigo">`;
    campo.innerHTML+=`<h2 id="enemie">O inimigo selecionou <br><spam id="colorI">${selecInimiga().toUpperCase()}!!</spam></h2>
    <h1 id="contador">C${num3}:P${num4}</h1>
    `;

}

document.addEventListener('DOMContentLoaded', () => {
    
    jogador=document.getElementById("jogador");
    for (let i = 0; i < 10; i++){
        jogador.innerHTML+=`<img src="cartas/${cardJogador[i]}.jpg" alt="" id="carta${i}" onclick="selecCard(${i})" class="escolha">`
    }

    

    inimigoCarta(campRand,selecRand,0,0);
    warframeCampo=personagem();
    

    
});

/*----------------------------------------------------------------*/

//SELECIONAR CARTA

let scoreP = 0
let scoreC = 0
function selecCard(num){
    console.log(selecRand)
    let warframeJogador = Object.values(warframes[cardJogador[num]])
    const carta = document.getElementById('carta'+num);
    carta.remove();
    console.log(warframeJogador[selecRand] );
    console.log(warframeCampo[selecRand]);
    if(warframeJogador[selecRand] > warframeCampo[selecRand]){
        console.log("Win!!")
        scoreP +=2
    }else if(warframeJogador[selecRand] == warframeCampo[selecRand]){
        console.log("Empate!!")
        scoreC +=1
        scoreP +=1
    }
    else{
        console.log("Derrota!!")
        scoreC +=2
    }
    campRand = randomico1()
    selecRand = randomico2()
    warframeCampo=personagem();
    inimigoCarta(campRand,selecRand,scoreC,scoreP);
    
    console.log(selecRand)


}
/*----------------------------------------------------------------*/




