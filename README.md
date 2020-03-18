## Introduction

Get started with React Hook Tree. the **_most powerful Tree View React Component_** for building responsive, mobile-first lightweight

- Data Tree Views
- Represent hierarchical data in json format
- Vertical Menus
- File system navigator displaying folders and files

![enter image description here](https://temkit-sidali.s3.eu-west-3.amazonaws.com/Capture%20d%E2%80%99e%CC%81cran%202020-03-18%20a%CC%80%2016.18.25.png)

## Quick start

### Install

#### NPM

    npm install --save react-hook-tree

#### YARN

    yarn add react-hook-tree

### Example

    import data from  "./treeData.json";
    import Tree from  "react-hook-tree";
    attributes = {
    		    [
    			    {
    				    name:  "title",
    				    type:  "text-input",
    				    placeholder:  "Title",
    				    class:  "col-6"
    			    },
    			    {
    				    name:  "active",
    				    type:  "checkbox",
    				    value:  0,
    				    datatype:  "int",
    				    label:  "activé le type",
    				    class:  "col-6"
    			    }
    		    ]
    	    }

    <Tree treeData={data} iconType={["folder"]} compact={true} itemAttributes={attributes} />

### Demo

[https://react-hook-tree.now.sh/](https://react-hook-tree.now.sh/)

### Props

#### Data

| Option         | types    | required | default | Description                                 |
| -------------- | -------- | -------- | ------- | ------------------------------------------- |
| treeData       | Json     | yes      | -       | the data to render (please see json format) |
| count          | number   | no       | -       | Show children count on each node            |
| itemAttributes | json     | no       | -       | Show children count on each node            |
| getData        | function | no       | -       | return the modified data                    |
| showActions    | boolean  | no       | false   | Show the edit and delete button on hover    |

#### Style

| Option    | types             | required | Description                                                         |
| --------- | ----------------- | -------- | ------------------------------------------------------------------- |
| iconType  | string            | no       | one of ("folder","rounded","thick") or leave empty for simple arrow |
| style     | React Style Props | no       | Global container inline style                                       |
| lineStyle | React Style Props | no       | Line inline style                                                   |
| iconStyle | React Style Props | no       | Icon inline style                                                   |
| compact   | boolean           | no       | add padding to line                                                 |

#### TreeData : _Attribute data Format_

    {
      "tree": [
        {
          "_id": "...",
          "children": [...],
          "item": { "name": "..." }
        }
    ]

_See Json example file in example folder_

### <a name="edit"></a> itemAttributes : _Attribute data Format_

Each node has a **name** which is an unchanging attribute.
with **itemAttributes** you can add more attribute to each node, here for example i will add a **title** and a **checkbox**.

Each node will be editable over an edit button which triggers a popup modal where you can edit these data you added.

![enter image description here](https://temkit-sidali.s3.eu-west-3.amazonaws.com/Capture%20d%E2%80%99e%CC%81cran%202020-03-18%20a%CC%80%2016.52.58.png)

you can configure what ever data you want in these types for now **input text** and **checkbox**, more data types will be available in next updates.

each data configuration have these attributes : name, type, placeholder and class

        [
    	    {
    		    name:  "title",
    		    type:  "text-input",
    		    placeholder:  "Title",
    		    class:  "col-6"
    	    },
    	    {
    		    name:  "active",
    		    type:  "checkbox",
    		    value:  0,
    		    datatype:  "int",
    		    label:  "activé le type",
    		    class:  "col-6"
    		},
        ]

![enter image description here](https://temkit-sidali.s3.eu-west-3.amazonaws.com/Capture%20d%E2%80%99e%CC%81cran%202020-03-18%20a%CC%80%2016.19.55.png)

as you can see the attributes dynamically create a form.

you can control the layout using the class property, for those who are used to bootstrap, it's the same philosophy, but here we are using [simple grid](https://github.com/zachacole/Simple-Grid) .

#### Simple philosophy :

col-12 : 100% screen width
col-6 : 50% screen width
col-3 : 25% screen width

Check the link [simple grid](https://github.com/zachacole/Simple-Grid), for more informations.

## Actions

### Edit

You can edit each node as explained in [Edit](#edit)

### Delete

Each node can be deleted,
if a node is deleted all its children will be deleted, This action cannot be undone. This will permanently delete the node, and remove all children associations.

![enter image description here](https://temkit-sidali.s3.eu-west-3.amazonaws.com/Capture%20d%E2%80%99e%CC%81cran%202020-03-18%20a%CC%80%2016.19.29.png)

## Get the data

to get the data modified if you use the **getData** props, you can simply do :

    const [data, setData] =  useState(json);

    useEffect(() => {
        console.log(data);
    }, [data]);

    	...

    <Tree treeData={data} getData={setData} lineStyle={{color:  "blue" }} showActions={false} />

### Comming Features

- Add Checkbox selecting items
- Codes & Algorithmes optimisation
- Storybook integration for to illustrate all the possible variation which could be done using react-hook-tree
- Tests

feel free to ask for any feature or report a bug buy add in a new issue [add new issue ](https://github.com/Temkit/react-hook-tree/issues/new)

### License

Copyright (c) 2020 **Temkit Sidali**.
Licensed under the MIT license.

_Free as in free Beer._ [](https://graphemica.com/%F0%9F%8D%BA)🍺🍺

**_Icons from_** [www.flaticon.com](https://www.flaticon.com/) **_From_** :

- [Those Icon](https://www.flaticon.com/authors/those-icons)
- [Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

**_Dependencies :_**

- [simple grid](https://github.com/zachacole/Simple-Grid)
- [react-hook-form](https://github.com/react-hook-form/react-hook-form)
- [hughsk/flat](https://github.com/hughsk/flat)
