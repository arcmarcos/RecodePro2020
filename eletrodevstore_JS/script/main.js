
// função p/ filtrar os produtos por categorias
function showProducts(categories) {
    let elements = document.getElementsByClassName('productCards'); //Pegar todas as categorias(id) na classe

// Loop for para pegar pelo id de cada elemento na categoria
    for (var indice = 0; indice < elements.length; indice++) {
        if(categories == elements[indice].id)
            elements[indice].style = "display:block"; 
        else
            elements[indice].style = "display:none";
    }
}

// Exibir todos
let showAllProducts = () => {
    let elements = document.getElementsByClassName('productCards');
    
    for (var indice = 0; indice < elements.length; indice++) {
        elements[indice].style = "display:block"; 
    }
}


// Função para adicionar produtos no carrinho
function cartUpValue() {
    const cartCount = document.querySelector('.cartCount')
    let count = sessionStorage.getItem('contador') == null || undefined ? 0 : sessionStorage.getItem('contador')
    count++;
    cartCount.innerHTML = count;
    sessionStorage.setItem('contador', count)

    if(count > 0) {
        cartCount.style = "transition: 1s; background: #773adc;"
    }
}

// Limpar carrinho
function deleteCart() {
    const cartCount = document.querySelector('.cartCount')
    let apagar = confirm("Deseja apagar o carrinho?");

    if (apagar){
        cartCount.innerHTML = 0;
        sessionStorage.setItem('contador', 0);
    }
}

//Guardar valor do carrinho, quando mudar ou atualizar página
document.addEventListener("DOMContentLoaded", (event) => {
    function getCartValue() {
        const cartCount = document.querySelector('.cartCount')
        let count = sessionStorage.getItem('contador') == null || undefined ? 0 : sessionStorage.getItem('contador')
        cartCount.innerHTML = count;

        if(count > 0) {
            cartCount.style = "transition: 1s; background: #773adc"
        }
    }
      getCartValue()
  });


/*
// Função para dar destaque na imagem
var modal = document.getElementsByClassName("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var image = document.getElementsByClassName('image')
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function showIn(el) {
    var imageSource = el.src;
    console.log(el.src)
    var altText = el.alt;
    console.log(el.alt)

    modal.style = "visibility: visible";
    modalImg.src = imageSource;
    console.log(imgSrc)
    captionText.innerHTML = altText;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function closeButton(el) { 
  modal.style.display = "none";
  console.log("ok")
}

window.onclick = (event) => {
  if(event.target == modal) {
    modal.style.display = "none";
  }
} */