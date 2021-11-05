CREATE DATABASE IF NOT EXISTS computerd;

USE computerd;
CREATE TABLE productos(
	idprod INT(11) NOT NULL AUTO_INCREMENT,
	descripcion VARCHAR(1000) default NULL,
	marca VARCHAR(1000) DEFAULT NULL,
    existencia INT DEFAULT NULL,
	categoria VARCHAR(1000) DEFAULT NULL,
	PRIMARY KEY(idprod)
);

DESCRIBE productos;
INSERT INTO productos values
(1, 'Placa madre', 'Asrock', 3, 'hadware'), 
(2, 'Disco Duro 120GB SATA', 'Seagate', 20, 'hadware'),
(3, 'Procesador Corei3', 'Intel', 10, 'hadware'),
(4, 'Tajerta VGA', 'Advantech', 6, 'hadware'),
(5, 'Memoria RAM DDR2', 'Kiston', 19, 'hadware');


SELECT * FROM productos;

