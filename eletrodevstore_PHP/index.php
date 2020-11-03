<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Eletro Dev Store</title>

    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/cart.css">
    <link rel="stylesheet" href="./css/modal.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/normalize.css"> <!-- folha css para ajustar paginas em quase todos os navegadores -->

    <link rel="shortcut icon" href="./imgs/eds_icon.png">

    <!-- Script para pegar icones no FontAwesome -->
    <script src="https://kit.fontawesome.com/110e73ee38.js" crossorigin="anonymous"></script>

</head>

<body>
    <!-- Header e cart -->
    <?php include_once "./pages/includes/header-cart-index.html" ?>

    <main>
        <section class="offerSection">
            <h3>Oferta do dia</h3>
            <div class="offerCards">

                <img class="image" src="./imgs/produtos/ps5.jpg" alt="PS5" onclick="showIn(this)">

                <h3>Sony PlayStation 5 2020</h3>
                <p class="oldPrice">R$ 4.999,00</p>
                <p class="newPrice">R$ 4.499,00</p>
                <button onclick="cartUpValue()"><i class="fas fa-shopping-basket"></i> Comprar</button>

            </div>

        </section>
    </main>

    <?php include_once "./pages/includes/footer-index.html" ?>

    <?php include_once "./pages/includes/modal.html" ?>

    <script src="./scripts/main.js"></script>
    <script src="./scripts/modal.js"></script>
</body>

</html>