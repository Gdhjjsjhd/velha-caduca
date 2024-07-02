let jogadorAtual = "X";
let celulas = document.getElementsByClassName("celula")

function fazerJogada(indiceCelula){
    if(celulas[indiceCelula].innerHTML === ""){
        celulas[indiceCelula].innerHTML = jogadorAtual;
        celulas[indiceCelula].classList.add(jogadorAtual);
        verificarVencedor();
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    }
}

function verificarVencedor(){
    let combinacoesVencedoras = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    for(let combinacao of combinacoesVencedoras){
        let[a, b, c] = combinacao;

        if(celulas[a].innerHTML !== ""&&
            celulas[a].innerHTML === celulas[b].innerHTML &&
            celulas[b].innerHTML === celulas[c].innerHTML
        ){
            alert('Jogador' + jogadorAtual + 'venceu!')
            reiniciarJogo();
            return;
        }
    }

    let empate = true;

    for(let celula of celulas){
        if(celula.innerHTML === ''){
            empate = false;
            break
        }
    }

    if(empate){
        alert('Empate')
        reiniciarJogo()
    }

    
}

function reiniciarJogo(){
    for( let celula of celulas){
        celula.innerHTML = ''

        celula.classList.remove('X', 'O');  
    }

    jogadorAtual = 'X';
}