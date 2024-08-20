# domAlf
domAlf est une fonction JavaScript qui permet d'ajouter dynamiquement une chaîne de caractères HTML à un élément parent spécifié dans le DOM. La fonction retourne un objet contenant toutes les références des éléments enfants qui ont un attribut id.

## Utilisation

### Importation

```javascript
import domAlf from './chemin/vers/le/fichier';
```

### Syntaxe

```javascript
domAlf(string, parent = document.body)
```

### Arguments

**string** (obligatoire) : Une chaîne de caractères représentant un élément HTML valide. L'élément doit être une balise HTML complète et correctement formée.

**parent** (optionnel) : L'élément DOM dans lequel la chaîne HTML sera insérée. Par défaut, l'élément parent est document.body.

### Valeur de retour

La fonction retourne un objet contenant les éléments enfants de parent ayant un attribut id. Chaque clé de l'objet correspond à l'ID de l'élément, et la valeur associée est une référence à l'élément DOM.

### Exemple

```javascript
import domAlf from './domAlf';

const htmlString = '<div id="myDiv"><p id="myParagraph">Hello, World!</p></div>';
const elements = domAlf(htmlString);

console.log(elements);
// {
// myDiv: <div id="myDiv">...</div>,
// myParagraph: <p id="myParagraph">Hello, World!</p>
// }
```

### Gestion des erreurs

Si la chaîne passée en argument n'est pas une balise HTML valide, la fonction affichera un message d'erreur dans la console

```javascript
console.error('argument is not a valid html tag: ', string);
```

## Notes

La chaîne HTML fournie doit être correctement formée, avec une balise ouvrante et une balise fermante (ou une balise auto-fermante).
Si la chaîne n'est pas valide, la fonction ne modifiera pas le DOM.
## License

Ce projet est sous licence MIT.