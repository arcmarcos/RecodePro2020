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

    <?php 
        include_once "../config/connect.php";

        if (isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['msg']))  {
            $name = $_POST['nome'];
            $email = $_POST['email'];
            $message = $_POST['msg'];

            $insertDB = "INSERT INTO mensagens (nome, email, msg) VALUES('$name', '$email', '$message')";
            $result = $connectDB -> query($insertDB);

        }
    ?>

</head>

<body>
    <!-- Header e cart -->
    <?php include_once "../pages/includes/header-cart.html" ?>

    <main>
        <address>
            <div class="contact">
                <i class="fab fa-whatsapp"></i>
                <p>Tel: 21 99999-9999</p>
            </div>
            <div class="contact">
                <i class="fas fa-at"></i>
                <p>contato@eds.com.br</p>
            </div>
        </address>

        <form class="contactForm" method="POST" action="">
            <h3>Formulário para contato</h3>

            <label for="nome">Nome:
                <input type="text" id="name" name="nome" placeholder="Digite seu nome" required>
            </label>
            <label for="email">Email:
                <input type="email" id="email" name="email" placeholder="Digite seu Email" required>
            </label>

            <h4>Mensagem</h4>
            <textarea name="msg" id="messageField" cols="50" rows="10" placeholder="Digite sua mensagem" required></textarea>
            <button type="submit" class="buttonContact">Enviar</button>
        </form>
    </main>

    <?php include_once "../pages/includes/footer.html" ?>

</body>

</html>
