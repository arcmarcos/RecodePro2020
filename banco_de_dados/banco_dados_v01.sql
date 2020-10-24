-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 24, 2020 at 02:51 PM
-- Server version: 8.0.21
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eds_recode`
--

-- --------------------------------------------------------

--
-- Table structure for table `pedidos`
--

CREATE TABLE `pedidos` (
  `id_cliente` int NOT NULL,
  `nome_cliente` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `endereco` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `telefone` int NOT NULL,
  `nome_produto` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `valor_unitario` float NOT NULL,
  `quantidade` int NOT NULL,
  `valor_total` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pedidos`
--

INSERT INTO `pedidos` (`id_cliente`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`) VALUES
(1, 'Joao Pedro', 'Rua ABC, número 512, bairro Jacarepaguá, Rio de Janeiro, RJ, CEP 2255512', 988889999, 'Sony PlayStation 5 2020 1TB', 4499, 1, 4499),
(2, 'Fernanda Campos', 'Estrada Velha, número 1120, bairro Santa Cruz, Rio de Janeiro, RJ, CEP 20852300', 999998888, 'Apple Macbook Pro 13\' Retina 1TB', 16999, 1, 16999);

-- --------------------------------------------------------

--
-- Table structure for table `produtos`
--

CREATE TABLE `produtos` (
  `idproduto` int NOT NULL,
  `categoria` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `descricao` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `preco_antigo` float DEFAULT NULL,
  `preco_novo` float DEFAULT NULL,
  `imagem` varchar(200) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produtos`
--

INSERT INTO `produtos` (`idproduto`, `categoria`, `descricao`, `preco_antigo`, `preco_novo`, `imagem`) VALUES
(1, 'videoGames', 'Sony PlayStation 5 2020 1TB', 4999, 4499, 'imgs/produtos/ps5.jpg'),
(2, 'videoGames', 'Microsoft Xbox Series X 2020 1TB', 5089, 4419, 'imgs/produtos/xbox.jpg'),
(5, 'geladeiras', 'Geladeira Brastemp FrostFree 540l', 6389, 5019, '/imgs/produtos/geladeira-brastemp.jpg'),
(6, 'geladeiras', 'Geladeira Brastemp Side by Side 540l', 7389, 6510, '/imgs/produtos/geladeira-brastemp2.jpg'),
(7, 'celulares', 'Smartphone Huawei P40 Pro white', 5189, 4649, '/imgs/produtos/Huawei.webp'),
(8, 'lavadoras', 'Lava e Seca Samsung 11kg Wifi', 4199, 3959, '/imgs/produtos/lava-seca.jpg'),
(9, 'info', 'Monitor UltraWide 49, Samsung', 8215, 7525, '/imgs/produtos/monitor-ultra.jpg'),
(10, 'info', 'Apple Macbook Pro 13, Retina 1TB, Samsung', 16999, 14229, '/imgs/produtos/macbook.jpeg'),
(11, 'info', 'Notebook AlienWare i9 16GB 1TB SSD RTX3080 17,', 26089, 24190, '/imgs/produtos/notebook.jpeg'),
(12, 'info', 'PC Gamer AlienWare i9 32GB 2TB SSD RTX3080 24,', 19389, 18019, '/imgs/produtos/pc-gamer.jpg'),
(13, 'tablets', 'Apple Ipad Pro 11, 256GB 4ª Geração', 9999, 8999, '/imgs/produtos/ipad.jpg'),
(14, 'tvs', 'Smart TV Ultra HD 65, Oled LG', 10299, 9499, '/imgs/produtos/tv-oled.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idproduto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_cliente` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idproduto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
