<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Eletro Dev Store</title>

    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/cart.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/normalize.css"> <!-- folha css para ajustar paginas em quase todos os navegadores -->

    <link rel="shortcut icon" href="../imgs/eds_icon.png">

    <!-- Script para pegar icones no FontAwesome -->
    <script src="https://kit.fontawesome.com/110e73ee38.js" crossorigin="anonymous"></script>

    <script src="../scripts/main.js"></script>
</head>

<body>
    <!-- Header e cart -->
    <?php include_once "../pages/includes/header-cart.html" ?>

    <main>
        <section class="stores">
            <div class="storeCards">
                <img src="../imgs/lojas/edificio-central.jpg" alt="Edificio central">
                <h3>Edifício Avenida Central - RJ</h3>
                <p>Av Rio Branco, 156</p>
                <p>1º andar</p>
                <p>Centro</p>
                <p>(21) 3322-2233</p>
            </div>
            <div class="storeCards">
                <img src="../imgs/lojas/barra-shopping.jpg" alt="Barra Shopping">
                <h3>Barra Shopping - RJ</h3>
                <p>Av das Americas, 3255</p>
                <p>Bloco B1</p>
                <p>Barra da Tijuca</p>
                <p>(21) 3333-3333</p>
            </div>
            <div class="storeCards">
                <img src="../imgs/lojas/madureira-shopping.jpg" alt="Madureira Shopping">
                <h3>Madureira Shopping - RJ</h3>
                <p>Estrada do Portela, 222</p>
                <p>2º andar</p>
                <p>Madureira</p>
                <p>(21) 2233-3322</p>
            </div>
        </section>
    </main>

    <?php include_once "../pages/includes/footer.html" ?>

</body>

</html>