CREATE DATABASE IF NOT EXISTS eletro_dev_store;

USE eletro_dev_store; 

CREATE TABLE IF NOT EXISTS produtos (
  id_produto INT PRIMARY KEY AUTO_INCREMENT,
  categoria VARCHAR(20)  NOT NULL,
  descricao VARCHAR(100)  NOT NULL,
  preco_antigo FLOAT DEFAULT NULL,
  preco_novo FLOAT DEFAULT NULL,
  imagem VARCHAR(200)  NOT NULL,
  alt_imagem VARCHAR(100)  NOT NULL
);

CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL, 
  email VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS mensagens ( 
  id_usuario INT PRIMARY KEY AUTO_INCREMENT, 
  msg VARCHAR(150) NOT NULL,
  data DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

INSERT INTO produtos (categoria, descricao, preco_antigo, preco_novo, imagem, alt_imagem)
VALUES 
	('Vídeo Games', 'Sony PlayStation 5 2020 1TB', 4999, 4499, '../images/produtos/ps5.jpg', 'PlayStation 5 Branco'),
	('Vídeo Games', 'Microsoft Xbox Series X 2020 1TB', 5089, 4419, '../images/produtos/xbox.jpg', 'Xbox series X Preto'),
	('Geladeiras', 'Geladeira Brastemp FrostFree 540l', 6389, 5019, '../images/produtos/geladeira-brastemp.jpg', 'Geladeira Brastemp Frost Free Inox'),
	('Geladeiras', 'Geladeira Brastemp Side by Side 540l', 7389, 6510, '../images/produtos/geladeira-brastemp2.jpg', 'Geladeira Brastemp Side by Side Inox'),
	('Celulares', 'Smartphone Huawei P40 Pro white', 5189, 4649, '../images/produtos/Huawei.webp', 'Celular Huawei P40 Pro branco'),
	('Lavadoras', 'Lava e Seca Samsung 11kg Wifi', 4199, 3959, '../images/produtos/lava-seca.jpg', 'Lava e seca samsung inox'),
	('Informática', 'Monitor UltraWide 49, Samsung', 8215, 7525, '../images/produtos/monitor-ultra.jpg', 'Monitor ultrawide Samsung'),
	('Informática', 'Apple Macbook Pro 13, Retina 1TB, Samsung', 16999, 14229, '../images/produtos/macbook.jpeg', 'Macbook Pro 13 polegas, Apple'),
	('Informática', 'Notebook AlienWare i9 16GB 1TB SSD RTX3080 17,', 26089, 24190, '../images/produtos/notebook.jpeg', 'Notebook Alienware preto'),
	('Informática', 'PC Gamer AlienWare i9 32GB 2TB SSD RTX3080 24,', 19389, 18019, '../images/produtos/pc-gamer.jpg', 'PC gamer Alienware com monitor e acessórios'),
	('Tablets', 'Apple Ipad Pro 11, 256GB 4ª Geração', 9999, 8999, '../images/produtos/ipad.jpg', 'Tablet Apple Ipad Pro'),
	('TVs', 'Smart TV Ultra HD 65, Oled LG', 10299, 9499, '../images/produtos/tv-oled.jpg', 'TV oled LG')
;


/* ↓ Códigos usados no NodeJS para trabalhar com esse banco de dados ↓ */

/* Produtos */
SELECT * FROM produtos;

/* Inserir mensagens */
INSERT INTO usuarios 
VALUES (
	NULL, '$nome', '$email'
);

INSERT INTO mensagens (id_usuario, msg) 
VALUES (
	LAST_INSERT_ID(), '$msg'
);

/* Buscar Mensagens */
SELECT * FROM usuarios
JOIN mensagens
ON usuarios.id_usuario = mensagens.id_usuario