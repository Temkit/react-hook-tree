## React Hook Carousel

[1]: https://github.com/Temkit/react-hook-tree.git

_the lightest Tree View react component you'll ever need_

#### Demo

[https://react-hook-tree.now.sh/](https://react-hook-tree.now.sh/)

#### Package Managers

```sh
# NPM
npm install react-hook-tree
```

### Settings

| Option    | Type    | Default | Description                                                                    |
| --------- | ------- | ------- | ------------------------------------------------------------------------------ |
| treeData  | Json    |         | the data to render                                                             |
| iconType  | Array   | null    | type of the icon to display `javascript iconType=['rounded','filled','thick']` |
| count     | Boolean | false   | Show children count                                                            |
| style     | Object  | null    | React style props for the global container                                     |
| lineStyle | Object  | null    | React style props for the line container                                       |
| iconStyle | Object  | null    | React style props for the icon                                                 |

##### How to use

JSON data Format

```javascript
{"tree": [
{
      "_id": "...",
      "children": [...],
      "item": { "name": "..." }
    }
```

JSON data example

```javascript
{
  "tree": [
    {
      "_id": "uMfYOav",
      "children": [],
      "item": { "name": "Maison & Décoration" }
    },
    {
      "_id": "GGEGjKu",
      "children": [
        {
          "_id": "IeTEeRRk",
          "children": [
            {
              "_id": "IerTERRk",
              "children": [],
              "item": { "name": "Grec" }
            },
            {
              "_id": "wnSisyyTq",
              "children": [],
              "item": { "name": "milles feuilles" }
            },
            {
              "_id": "CFRQieLgg",
              "children": [],
              "item": { "name": "biére" }
            }
          ],
          "item": { "name": "Caféteria" }
        },
        {
          "_id": "wnSisTq",
          "children": [],
          "item": { "name": "Confiserie" }
        },
        {
          "_id": "CFRQieL",
          "children": [],
          "item": { "name": "Patisserie" }
        },
        {
          "_id": "lTFJclb",
          "children": [],
          "item": { "name": "Crèmerie" }
        },
        {
          "_id": "ZsbECTa",
          "children": [],
          "item": { "name": "Snac" }
        },
        {
          "_id": "GJEnYtO",
          "children": [],
          "item": { "name": "Restaurant" }
        },
        {
          "_id": "s01MkVl",
          "children": [],
          "item": { "name": "Fast Food" }
        }
      ],
      "item": { "name": "Restauration " }
    },
    {
      "_id": "qUJNWBY",
      "children": [
        {
          "_id": "Ug1qumE",
          "children": [
            {
              "_id": "dVz0vdS",
              "children": [],
              "item": {
                "name": "Prêt à porter homme"
              }
            },
            {
              "_id": "qCo0UFi",
              "children": [],
              "item": { "name": "Chaussure" }
            },
            {
              "_id": "cBINLaf",
              "children": [],
              "item": { "name": "Traditionnel" }
            }
          ],
          "item": { "name": "Homme" }
        },
        {
          "_id": "laYYJYu",
          "children": [
            {
              "_id": "BOQhxKt",
              "children": [],
              "item": { "name": "lingerie" }
            },
            {
              "_id": "WuXHxjb",
              "children": [],
              "item": {
                "name": "Prêt à porter femme"
              }
            },
            {
              "_id": "h0SpmIZ",
              "children": [],
              "item": { "name": "Chaussure " }
            },
            {
              "_id": "xLBaoiH",
              "children": [],
              "item": { "name": "Voile " }
            },
            {
              "_id": "TkcWnvg",
              "children": [],
              "item": { "name": "Traditionnel" }
            }
          ],
          "item": { "name": "Femme" }
        },
        {
          "_id": "xvdGyBf",
          "children": [
            {
              "_id": "uvTwjpu",
              "children": [],
              "item": {
                "name": "Prêt à porter enfant"
              }
            },
            {
              "_id": "0Xtolvn",
              "children": [],
              "item": {
                "name": "Article Bébé & Nourisson"
              }
            },
            {
              "_id": "BbyJHEY",
              "children": [],
              "item": { "name": "Chaussure" }
            }
          ],
          "item": { "name": "Enfant" }
        },
        {
          "_id": "QU1oDlV",
          "children": [],
          "item": { "name": "Sport" }
        }
      ],
      "item": { "name": "Habillement" }
    }
  ]
}

```

How to use:

```javascript
<Tree treeData={data} style={{ background: "#e9f7f2" }} />
```

#### License

Copyright (c) 2020 Temkit Sidali

Licensed under the MIT license.

Free as in free Beer.

```html
Icons made by
<a href="https://www.flaticon.com/authors/those-icons" title="Those Icons"
  >Those Icons</a
>
from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

<div>
  Icons made by
  <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy"
    >Dave Gandy</a
  >
  from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
</div>
```
