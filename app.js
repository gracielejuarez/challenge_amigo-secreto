//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = []
function adicionarAmigo(){
    let nomeSecreto = document.getElementById('amigo').value;
    console.log(nomeSecreto);
    let sequenciaNomes = '';

    //Verifica se o campo está vazio
    if (nomeSecreto == ''){
        alert('Por favor, insira um nome.');
        return;
    }
    //Adiciona o array
    nomeAmigos.push(nomeSecreto);
    console.log(nomeAmigos);

    //Limpa o campo
    document.getElementById('amigo').value = '';
    let contador = 0;
    let lista = document.getElementById('listaAmigos');

    while(contador<nomeAmigos.length){
        console.log('posição:'+contador + ' ' + nomeAmigos[contador]);
        sequenciaNomes += '<li>'+nomeAmigos[contador]+'</li>';
        contador = contador + 1;
        
    }
    lista.innerHTML = sequenciaNomes;

}
//Sortear amigo
function sortearAmigo() {
    if (nomeAmigos.length === 0){
         alert('Nenhum nome foi adicionado ao sorteio');
        return
    }
        //Gerar indice aleatório
    let indiceAleatorio = Math.floor(Math.random() * nomeAmigos.length);

    //Obtém o nome sorteado
    let amigoSecreto = nomeAmigos[indiceAleatorio];

    //Mostra o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "Amigo secreto sorteado: <strong>" + amigoSecreto + "</strong>";
    }
   