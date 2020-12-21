<?php

require_once 'connect.php';
header("Access-Control-Allow-Origin:*");

$sqlProducts = "SELECT * FROM `produtos`";
$resultProducts = consultDB($sqlProducts);
$products = [];

while ($row = mysqli_fetch_assoc($resultProducts)) {
  $products[] = $row;
}

echo json_encode($products);
