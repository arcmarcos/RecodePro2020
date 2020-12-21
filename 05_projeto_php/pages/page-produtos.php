<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Eletro Dev Store</title>

    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/products.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/cart.css">
    <link rel="stylesheet" href="../css/modal.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/normalize.css"> <!-- folha css para ajustar paginas em quase todos os navegadores -->
    <link rel="shortcut icon" href="../imgs/eds_icon.png">

    <!-- Script para pegar icones no FontAwesome -->
    <script src="https://kit.fontawesome.com/110e73ee38.js" crossorigin="anonymous"></script>

    <script src="../scripts/main.js"></script>

    <?php include_once "../config/connect.php" ?>

</head>

<body>
    <!-- Header e cart -->
    <?php include_once "../pages/includes/header-cart.html" ?>

    <main>
        <div class="productContainer">
            <div class="categories">
                <h3>Categorias</h3>
                <button class="categoriesButtons" onclick="showAllProducts()">Todos</button>
                <button class="categoriesButtons" onclick="showProducts('videoGames')">Vídeogames</button>
                <button class="categoriesButtons" onclick="showProducts('geladeiras')">Geladeiras</button>
                <button class="categoriesButtons" onclick="showProducts('celulares')">Celulares</button>
                <button class="categoriesButtons" onclick="showProducts('lavadoras')">Lavadoras</button>
                <button class="categoriesButtons" onclick="showProducts('info')">Informática</button>
                <button class="categoriesButtons" onclick="showProducts('tablets')">Tablets</button>
                <button class="categoriesButtons" onclick="showProducts('tvs')">Televisores</button>
            </div>

            <section class="productSection">
                <?php include "../config/products.php"?>
            </section>
        </div>
    </main>

    <?php include_once "../pages/includes/footer.html" ?>

    <?php include_once "../pages/includes/modal.html" ?>

    <script src="../scripts/modal.js"></script>
</body>

</html>