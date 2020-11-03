
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

//Exibir carrinho 
function showCart(cartID) {
    const cart = document.getElementById(cartID);
    cart.classList.add('showing')
    cart.addEventListener('click', (e) => {
        if(e.target.id == cartID) {
            cart.classList.remove('showing')
        }
    })
}

function displayCart(el) {
    showCart('cartContainer');
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