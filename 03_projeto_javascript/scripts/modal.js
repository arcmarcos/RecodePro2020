// Script para criar um destaque ao clicar nas imagens dos produtos

// Função para chamar o modal ao clicar na imagem,
// Quando clica, adiciona a classe display ao modal.
// Classe essa que faz o modal aparecer na tela,
// ao clicar em fechar ou fora da imagem, essa classe é removida
// e o modal fecha.
function callModal(modalID) {
  const modal = document.getElementById(modalID);

  if(modal) { 
    modal.classList.add('display');
    
    modal.addEventListener('click', (action) => {
      if(action.target.id == modalID || action.target.className == 'close') {
        modal.classList.remove('display');
      }
    });
  }
}


// Função para pegar qual imagem vai ser exibida no modal
// Ao clicar na imagem, ativa o gatilho da função
let image = document.querySelector('.image');
let modalImage = document.getElementById('imageContainer')

function showIn(el) {
  callModal('modalContainer');
  let imageSource = el.src;
  modalImage.src = imageSource;
}

// A função callModal, só é chamada dentro da função showIn, 
//  que por sua vez, é chamada pelo clique na imagem do produto.