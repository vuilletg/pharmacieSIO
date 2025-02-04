# Projet Express
realisation d'une api dans le cadre des cours de **BTS SIO** au lycée **Louise Michel**

## Prerequis 
le projet utilise les élement suivant:
* NodeJs
* ExpressJs
* MySQL

## Instalation

* ``` git clone https://github.com/vuilletg/pharmacieSIO.git```
* ``` npm install```
* Créez un fichier **_DB.ini_** à la racine du projet contenant les informations de connexion à la base de données. Ajoutez-y les paramètres suivants pour l'environnement de développement :
  * host 
  * user
  * password
  * database
  * port
* ``` node index.js```
## Schema base
ce projet comporte une base de donnée qui se présente comme suit

|     client     | medicament |  ordonance   |
|:--------------:|:----------:|:------------:|
|      secu      |     id     |      id      |
|      nom       |    nom     |    durée     |
|     prenom     |    mode    |    debut     |
|    mutuelle    |   stock    |  posologie   |
| date_naissance |            | idMedicament |
|                |            |   idClient   |

## utilisation
L'API propose plusieurs routes pour la gestion des clients, médicaments et ordonnances.:
### Client
URL de base : ```/client``` :
* get
  * ```/```: Retourne tous les clients.
  * ```/:nom```: Retourne les clients ayant le nom spécifié en paramètre.
* post
  * ```/``` permet d'ajouter un client grace au informations du ```body``` de la requette 
* delete 
  * ```/:secu``` permet de suprimer le client qui a le numero de securité scocial passé en paramètre
* patch 
  * ```/``` permet de metre à jous les information d'un client grace au contenus de ```body```
### medicament
URL de base :```/medicament``` 
* get 
  * ```/``` Retourne tous les médicaments.
  * ```/:id``` Retourne le médicament correspondant à l'id spécifié en paramètre.
* post
  * ```/``` permet d'ajouter un medicament grace au informations du ```body``` de la requette
* delete
  * ```/:id``` permet de suprimer le medicament qui a l'id passé en paramètre
* patch 
  * ```/``` permet de metre à jous les information d'un medicament grace au contenus de ```body```
### ordonnance
URL de base :```/ordonnance```
* get
  * ```/``` ou ```/:id``` permet de retourner soit toutes les ordonnance soit l'ordonnance qui a comme id l'id passer en paramètre
* post
  * ```/``` permet d'ajouter une ordonnance grace au informations du ```body``` de la requette
* delete
  * ```/:id``` permet de suprimer le medicament qui a l'id passé en paramètre
* patch
  * ```/``` permet de metre à jous les information d'un medicament grace au contenus de ```body```
### prevision de stock (à venir)
URL de base  :```/ordonnance```
* get
  * ```/:nbMois``` permet de calculer la quantité de medicament nécéssair sur nun peride de x mois definis en parametre
## Remarque 
* Le fichier **_DB.ini_** ne doit pas être partagé publiquement pour des raisons de sécurité. Veillez à protéger vos informations de connexion.
* assurez vous de bien avoir démarée le serveur de base de donnée pour le bon fonctionnement.
## Auteur
Réalisé par **Gaspard Vuillet** dans le cadre du **BTS SIO** au lycée **Louise Michel**.