CREATE TABLE client (
  secu VARCHAR ( 15 ) NOT NULL,
  nom VARCHAR ( 50 ) NOT NULL,
  prenom VARCHAR ( 50 ) NOT NULL,
  mutuelle VARCHAR ( 50 ),
  date_naissance DATE,
  PRIMARY KEY ( secu )
);
CREATE TABLE medicament (
  id INT AUTO_INCREMENT,
  nom VARCHAR ( 50 ) NOT NULL,
  MODE ENUM ( "pastilles", "comprimés", "doses" ),
  stock INT,
  PRIMARY KEY ( id )
);
CREATE TABLE ordonnance (
  id INT AUTO_INCREMENT,
  medicament INT NOT NULL,
  duree INT,
  debut DATE,
  posologie INT,
  client VARCHAR ( 15 ) NOT NULL,
  PRIMARY KEY ( id ),
  FOREIGN KEY ( medicament ) REFERENCES medicament ( id ),
  FOREIGN KEY ( client ) REFERENCES client ( secu )
);