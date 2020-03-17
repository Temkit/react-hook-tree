## React Hook Carousel

[1]: https://github.com/Temkit/react-hook-tree.git

_React Hook Tree views can be used to represent a file system navigator displaying folders and files, an item representing a folder can be expanded to reveal the contents of the folder, which may be files, folders, or both. it can also be used to represent hierarchical data in json format_

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

See the full example in example folder

```javascript
<Tree treeData={data} style={{ background: "#e9f7f2" }} />
```

#### License

Copyright (c) 2020 Temkit Sidali

Licensed under the MIT license.

Free as in free Beer.

Icons from [www.flaticon.com](https://www.flaticon.com/)
[Those Icon](https://www.flaticon.com/authors/those-icons)
[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)
