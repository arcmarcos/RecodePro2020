
// função que ativa através do onclick

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
