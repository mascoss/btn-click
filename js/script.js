// const botao = document.getElementById('naoBtn');
let contadorDeCliques = 0;
const limiteDeCliques = 3;
const dialogOverlay = document.getElementById('dialog-overlay');
const fecharDialogo = document.getElementById('fechar-dialogo');
const dialogBox = document.querySelector('.dialog-box p'); // seleciona o elemento <p> dentro da caixa de diálogo

let mensagens = [];
let indiceAtual = 0;

// embaralha o array de mensagens 
function embaralhaArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[array[i], array[j]] = [array[j], array[i]];
	}
}

// carrega mensagens do arquivo JSON
fetch('data/mensagens.json')
	.then(response => response.json())
	.then(data => {
		mensagens = data.messages;
		embaralhaArray(mensagens);
	})
	.catch(error => console.error('Erro ao carregar as mensagens:', error));

document.getElementById('naoBtn').addEventListener('click', function () {
	var buttonWidth = this.offsetWidth;
	var buttonHeigth = this.offsetHeight;
	var footerHeigth = document.querySelector('footer').offsetHeight;

	// define os limites do movimento  
	var maxX = window.innerWidth - buttonWidth;
	var maxY = window.innerHeight - buttonHeigth - footerHeigth;

	// move o botao dentro dos limites 
	var newX = Math.random() * maxX;
	// var newY = Math.random() * (maxY - minY);
	var newY = Math.random() * maxY;

	this.style.position = 'absolute';
	this.style.left = newX + 'px';
	this.style.top = newY + 'px';

	contadorDeCliques++;
	if (contadorDeCliques >= limiteDeCliques) {

		if (mensagens.length > 0) {
			// pega a mensagem atual e incrementa o indice
			const mensagemAtual = mensagens[indiceAtual];
			dialogBox.textContent = mensagemAtual;
			indiceAtual++;
			if (indiceAtual >= mensagens.length) {
				indiceAtual = 0;
				embaralhaArray(mensagens);
			}
		}
		dialogOverlay.style.display = 'flex';
		contadorDeCliques = 0;
	}
});

fecharDialogo.addEventListener('click', () => {
	dialogOverlay.style.display = 'none';
});

document.getElementById('simBtn').addEventListener('click', function () {
	// redireciona para um novo link em outra aba
	window.open('https://youtu.be/Ws3r24Uhu74?si=UMm_86udAIU9Arvk&t=72', '_blank');
});

document.getElementById('author').addEventListener('click', function () {
	// redireciona para um novo link em outra aba
	window.open('https://github.com/marcosscruz', '_blank');
});
