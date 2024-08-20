# domAlf
Une petite bibliothèque JavaScript pour manipuler le DOM facilement en utilisant des chaînes de caractères HTML et pour créer et ajouter des éléments HTML dynamiquement.

## Installation

```
npm install domAlf
```

## Utilisation 

```
import { domAlf, creAppend } from 'domAlf';
```

### Fonction domAlf(string, parent = document.body)

Cette fonction permet d'ajouter un élément HTML au DOM à partir d'une chaîne de caractères HTML. Elle retourne un objet contenant les éléments ajoutés qui ont un id.

#### Paramètres

* **string (String)** : La chaîne de caractères HTML à ajouter au DOM. Cette chaîne doit commencer par une balise HTML valide et se terminer par **>**.
* **parent (Element)** : L'élément parent dans lequel l'élément HTML sera ajouté. Par défaut, c'est **document.body**.
#### Retour

Un objet contenant tous les éléments ajoutés qui ont un **id**. La clé de chaque entrée est l'**id** de l'élément, et la valeur est l'élément DOM lui-même.

### Exemple

```
const elements = domAlf('<div id="container"><p id="text">Hello World!</p></div>');
console.log(elements.container); // <div id="container">...</div>
console.log(elements.text); // <p id="text">Hello World!</p>
```

### Fonction creAppend(pere, child, content = null)

Cette fonction crée un nouvel élément HTML et l'ajoute en tant qu'enfant à un élément parent spécifié.

#### Paramètres

* **pere (Element)** : L'élément parent auquel le nouvel élément sera ajouté.
* **child (String)** : Le type de l'élément enfant à créer (ex. **div**, **span**).
* **content (String)** : Le contenu HTML à insérer dans l'élément enfant (optionnel).
#### Retour

L'élément enfant nouvellement créé.

### Exemple 

```
const parent = document.getElementById('container');
const child = creAppend(parent, 'p', 'Hello World!');
console.log(child); // <p>Hello World!</p>
```