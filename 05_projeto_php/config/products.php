<?php
  $consultDB = "SELECT * FROM produtos";
  $result = $connectDB -> query($consultDB);

  if($result -> num_rows > 0) {
      while ($rows = $result -> fetch_assoc()) {
          $categoria = $rows['categoria'];
          $imagem = $rows['imagem'];
          $descricao = $rows['descricao'];
          $preco_antigo = $rows['preco_antigo'];
          $preco_novo = $rows['preco_novo'];
          $alt_imagem = $rows['alt_imagem'];
?>
  <div class="productCards" id="<?php echo $categoria; ?>">
      <img class="image" src="<?php echo $imagem; ?>" alt="<?php echo $alt_imagem?>" onclick="showIn(this)">
      <h3><?php echo $descricao; ?></h3>
      <p class="oldPrice">R$ <?php echo number_format($preco_antigo, 2, ",", "."); ?></p>
      <p class="newPrice">R$ <?php echo number_format($preco_novo, 2, ",", "."); ?></p>
      <button onclick="cartUpValue()"><i class="fas fa-shopping-basket"></i> Comprar</button>
  </div>
<?php
      }
  }
?>
