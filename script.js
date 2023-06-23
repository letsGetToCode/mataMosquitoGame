// encontrar altura e largura
var alturaBrowser = 0;
var larguraBrowser = 0; 
var vidas = 1;
var tempo = 15;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace("?", "");

if(nivel === "facil"){
	criaMosquitoTempo = 1500;
} else if(nivel === "medio"){
	criaMosquitoTempo = 1000;
} else{
	criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo(){
	alturaBrowser = window.innerHeight;
	larguraBrowser = window.innerWidth;
}
ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){
	tempo -= 1;
	if(tempo < 0){
		clearInterval(cronometro);
		clearInterval(criaMosquito);
		window.location.href = "win.html";
	} else{
		document.getElementById("cronometro").innerHTML = tempo;
	}
},1000)

function posicaoRandomica(){
	// remover o mosquito anterior (caso exista)
	if(document.getElementById("mosquito")){
		document.getElementById("mosquito").remove();
		
		if(vidas > 3){
			window.location.href="game_over.html"
		}else{
			document.getElementById("v" + vidas).src="./Assets/imagens/coracao_vazio.png";
		}		
		vidas ++;
	}	

	//gerar uma posição randomica para largura e altura do browser
	var posicaoX = Math.floor(Math.random() * larguraBrowser) - 90;
	var posicaoY = Math.floor(Math.random() * alturaBrowser) - 90;

	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY; 

	console.log(posicaoX, posicaoY);

	//criar o elemento HTML
	var mosquito = document.createElement('img');
	mosquito.src = "./Assets/imagens/mosquito.png";
	mosquito.className = tamanhoAleatorio() + " " +ladoAleatorio();
	mosquito.style.position = "absolute"
	mosquito.style.left = posicaoX + "px";
	mosquito.style.top = posicaoY + "px";
	mosquito.id = "mosquito";
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito);
}

//criar tamanhos diferentes para os mosquitos de maneira aleatória 
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3);
	switch(classe){
		case 0: 
			return "mosquito1";
		case 1:
			return "mosquito2";
		case 2:
			return "mosquito3";	
	}
}

//função que irá determinar para que lado o mosquito está virado
function ladoAleatorio(){
	var lado = Math.floor(Math.random()* 2);
	switch(lado){
		case 0: 
			return "ladoA";
		case 1:
			return "ladoB";	
	}
}






