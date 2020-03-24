![React Hook tree](https://s3.eu-west-3.amazonaws.com/img.yet.expert/rht/logo512.png)

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

[https://rht.now.sh/](https://rht.now.sh/)

### Props

#### Data

| Option         | types    | required | default | Description                                                              |
| -------------- | -------- | -------- | ------- | ------------------------------------------------------------------------ |
| treeData       | Json     | yes      | -       | the data to render (please see json file in example folder)              |
| count          | boolean  | no       | -       | Show children count on each node                                         |
| lang           | json     | yes      | -       | Lang Attribute, please see [Lang Object Attribute](#lang)                |
| itemAttributes | json     | no       | -       | Item Attribute, please see [Lang Data Object](#data)                     |
| showActions    | boolean  | no       | false   | Show the edit and delete button on hover                                 |
| getData        | function | no       | -       | return the modified json data, if actions (edit, delete) are are enabled |
|                |

[](#lang)

#### LangData : Lang Attribute

    	{
    		"modal": {
    			"edit": {
    				"title": "Edit Modal",
    				"warning": "Check carfully your data before saving !",
    				"content": "You are editing the %1 node",
    				"button": "save"
    			},
    			"delete": {
    				"title": "Are you absolutely sure?",
    				"warning": "Unexpected bad things will happen if you don’t read this!",
    				"content": "This action cannot be undone. This will permanently delete the %1, and remove all children associations. Please type confirmed to delete.",
    				"confirmation": "please type %1 to delete",
    				"verification": "confirm",
    				"button": "delete this node"
    			}
    		}
    	}

_See Lang example file in Lang folder_

[](#data)

#### TreeData : _Attribute data Format_

    {
      "tree": [
        {
          "_id": "...",
          "children": [...],
          "item": { "name": "..." }
        }
    ]

_See Json example file in Data folder_

#### Style

| Option    | types             | required | Description                                                         |
| --------- | ----------------- | -------- | ------------------------------------------------------------------- |
| iconType  | string            | no       | one of ("folder","rounded","thick") or leave empty for simple arrow |
| style     | React Style Props | no       | Global container inline style                                       |
| lineStyle | React Style Props | no       | Line inline style                                                   |
| iconStyle | React Style Props | no       | Icon inline style                                                   |
| compact   | boolean           | no       | add padding to line                                                 |

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

## Lang

### Edit

You can edit each node as explained in [Edit](#edit)

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

- [x] Add Json langage file
- [ ] Add Checkbox selecting items
- [ ] Jest test
- [ ] Codes & Algorithmes optimisation

feel free to ask for any feature or report a bug buy add in a new issue [add new issue ](https://github.com/Temkit/react-hook-tree/issues/new)

### License

Copyright (c) 2020 **Temkit Sidali**.
Licensed under the MIT license.

**_Icons from_** [www.flaticon.com](https://www.flaticon.com/) **_From_** :

- [Those Icon](https://www.flaticon.com/authors/those-icons)
- [Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

**_Dependencies :_**

- [simple grid](https://github.com/zachacole/Simple-Grid)
- [react-hook-form](https://github.com/react-hook-form/react-hook-form)
- [hughsk/flat](https://github.com/hughsk/flat)
