## Introduction

Get started with React Hook Tree. the **_most powerful Tree View React Component_** for building responsive, mobile-first lightweight

- Data Tree Views
- Represent hierarchical data in json format
- Vertical Menus
- File system navigator displaying folders and files

![enter image description here](https://temkit-sidali.s3.eu-west-3.amazonaws.com/Capture%20d%E2%80%99e%CC%81cran%202020-03-18%20a%CC%80%2016.18.25.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf//////////wEaDGV1LWNlbnRyYWwtMSJHMEUCIQDu/X%2bwM3hKBe64HjU3GI1EglGijoQ/bprtqmT/XV0G6gIgIOl7lxOHMO0LqgWIyLGZ4Y4dt6BKz20PuBwyEYvc9nUquQEIwP//////////ARAAGgw0NTYwODEyNDUwNTgiDA5WdFhCe9eXDN9GjCqNAfARXuo1x%2b8L2chmeISJiCHqadBd6X5x3irEF4t24jqzbLbMa748x3z1egmcIUOi%2b0v8e1wMGCDSZqV1kxNgo8%2b7xX7z8NjSR5yN78F0YClMZkCk3EK3LOdUJOb7We%2b8a%2bKJhde63SmbFKszfLI91LIR9%2b1kDQujG0ml%2bOyKvVv0yMGCqqu/jcCyraHoRzCd9cjzBTqhAuO9/C1Fu7d3pZRrsX7hHphHkiYKHUzf3kz1lp7/5URVs4w%2bxn/oAks0yA1MLb1dk19IQ69O6ItHamVD4pDFZYEoKCU3nymPIcbMSRqYk3vnR5l2OBnu6OIOF3mAMlGG/DE48sAmiHezmmwL3spr95PwyanxuysYDzlslGuJxUc5DBG%2bYInaHO9QYpaJWAmrdaGFQm3K%2bsb8ynR4qPv6OFdhnMAatskCpNWeBaWxX0W8Ps0TmT/exFRGGzRzeylHeWfCQUa4sQiekxFEot61GDfEc5NlAy%2bEuPwIVS7oZeHsHhN0k58aAYGG4dqnFjiDhbM7DiYR1/mjeI5cYcxQUvMy2nQRUIS8h7K0pzv%2bJG/bQAFusBJ8CeCVXTJjMB7RM1A=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200318T155829Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWUMEPQOBAMFF2MES/20200318/eu-west-3/s3/aws4_request&X-Amz-Signature=d96bc64b8fea1e563004b1f66edc8358382f7a7085f62db54bc5f3bc50cdae95)

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

![enter image description here](https://temkit-sidali.s3.eu-west-3.amazonaws.com/Capture%20d%E2%80%99e%CC%81cran%202020-03-18%20a%CC%80%2016.52.58.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf//////////wEaDGV1LWNlbnRyYWwtMSJHMEUCIQDu/X%2bwM3hKBe64HjU3GI1EglGijoQ/bprtqmT/XV0G6gIgIOl7lxOHMO0LqgWIyLGZ4Y4dt6BKz20PuBwyEYvc9nUquQEIwP//////////ARAAGgw0NTYwODEyNDUwNTgiDA5WdFhCe9eXDN9GjCqNAfARXuo1x%2b8L2chmeISJiCHqadBd6X5x3irEF4t24jqzbLbMa748x3z1egmcIUOi%2b0v8e1wMGCDSZqV1kxNgo8%2b7xX7z8NjSR5yN78F0YClMZkCk3EK3LOdUJOb7We%2b8a%2bKJhde63SmbFKszfLI91LIR9%2b1kDQujG0ml%2bOyKvVv0yMGCqqu/jcCyraHoRzCd9cjzBTqhAuO9/C1Fu7d3pZRrsX7hHphHkiYKHUzf3kz1lp7/5URVs4w%2bxn/oAks0yA1MLb1dk19IQ69O6ItHamVD4pDFZYEoKCU3nymPIcbMSRqYk3vnR5l2OBnu6OIOF3mAMlGG/DE48sAmiHezmmwL3spr95PwyanxuysYDzlslGuJxUc5DBG%2bYInaHO9QYpaJWAmrdaGFQm3K%2bsb8ynR4qPv6OFdhnMAatskCpNWeBaWxX0W8Ps0TmT/exFRGGzRzeylHeWfCQUa4sQiekxFEot61GDfEc5NlAy%2bEuPwIVS7oZeHsHhN0k58aAYGG4dqnFjiDhbM7DiYR1/mjeI5cYcxQUvMy2nQRUIS8h7K0pzv%2bJG/bQAFusBJ8CeCVXTJjMB7RM1A=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200318T155956Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWUMEPQOBAMFF2MES/20200318/eu-west-3/s3/aws4_request&X-Amz-Signature=edeeeb69d38a4ec0f3bc49f0a6222914fc3303d11f3cae463a626e4f0e3970a0)

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

![enter image description here](https://temkit-sidali.s3.eu-west-3.amazonaws.com/Capture%20d%E2%80%99e%CC%81cran%202020-03-18%20a%CC%80%2016.19.55.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf//////////wEaDGV1LWNlbnRyYWwtMSJHMEUCIQDu/X%2bwM3hKBe64HjU3GI1EglGijoQ/bprtqmT/XV0G6gIgIOl7lxOHMO0LqgWIyLGZ4Y4dt6BKz20PuBwyEYvc9nUquQEIwP//////////ARAAGgw0NTYwODEyNDUwNTgiDA5WdFhCe9eXDN9GjCqNAfARXuo1x%2b8L2chmeISJiCHqadBd6X5x3irEF4t24jqzbLbMa748x3z1egmcIUOi%2b0v8e1wMGCDSZqV1kxNgo8%2b7xX7z8NjSR5yN78F0YClMZkCk3EK3LOdUJOb7We%2b8a%2bKJhde63SmbFKszfLI91LIR9%2b1kDQujG0ml%2bOyKvVv0yMGCqqu/jcCyraHoRzCd9cjzBTqhAuO9/C1Fu7d3pZRrsX7hHphHkiYKHUzf3kz1lp7/5URVs4w%2bxn/oAks0yA1MLb1dk19IQ69O6ItHamVD4pDFZYEoKCU3nymPIcbMSRqYk3vnR5l2OBnu6OIOF3mAMlGG/DE48sAmiHezmmwL3spr95PwyanxuysYDzlslGuJxUc5DBG%2bYInaHO9QYpaJWAmrdaGFQm3K%2bsb8ynR4qPv6OFdhnMAatskCpNWeBaWxX0W8Ps0TmT/exFRGGzRzeylHeWfCQUa4sQiekxFEot61GDfEc5NlAy%2bEuPwIVS7oZeHsHhN0k58aAYGG4dqnFjiDhbM7DiYR1/mjeI5cYcxQUvMy2nQRUIS8h7K0pzv%2bJG/bQAFusBJ8CeCVXTJjMB7RM1A=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200318T155933Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWUMEPQOBAMFF2MES/20200318/eu-west-3/s3/aws4_request&X-Amz-Signature=d023885f4c6ff8f2eb4d6efbe5c86e773ce5c821fae9e144d2010c2e0e0dc497)

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

![enter image description here](https://temkit-sidali.s3.eu-west-3.amazonaws.com/Capture%20d%E2%80%99e%CC%81cran%202020-03-18%20a%CC%80%2016.19.29.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf//////////wEaDGV1LWNlbnRyYWwtMSJHMEUCIQDu/X%2bwM3hKBe64HjU3GI1EglGijoQ/bprtqmT/XV0G6gIgIOl7lxOHMO0LqgWIyLGZ4Y4dt6BKz20PuBwyEYvc9nUquQEIwP//////////ARAAGgw0NTYwODEyNDUwNTgiDA5WdFhCe9eXDN9GjCqNAfARXuo1x%2b8L2chmeISJiCHqadBd6X5x3irEF4t24jqzbLbMa748x3z1egmcIUOi%2b0v8e1wMGCDSZqV1kxNgo8%2b7xX7z8NjSR5yN78F0YClMZkCk3EK3LOdUJOb7We%2b8a%2bKJhde63SmbFKszfLI91LIR9%2b1kDQujG0ml%2bOyKvVv0yMGCqqu/jcCyraHoRzCd9cjzBTqhAuO9/C1Fu7d3pZRrsX7hHphHkiYKHUzf3kz1lp7/5URVs4w%2bxn/oAks0yA1MLb1dk19IQ69O6ItHamVD4pDFZYEoKCU3nymPIcbMSRqYk3vnR5l2OBnu6OIOF3mAMlGG/DE48sAmiHezmmwL3spr95PwyanxuysYDzlslGuJxUc5DBG%2bYInaHO9QYpaJWAmrdaGFQm3K%2bsb8ynR4qPv6OFdhnMAatskCpNWeBaWxX0W8Ps0TmT/exFRGGzRzeylHeWfCQUa4sQiekxFEot61GDfEc5NlAy%2bEuPwIVS7oZeHsHhN0k58aAYGG4dqnFjiDhbM7DiYR1/mjeI5cYcxQUvMy2nQRUIS8h7K0pzv%2bJG/bQAFusBJ8CeCVXTJjMB7RM1A=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200318T155903Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWUMEPQOBAMFF2MES/20200318/eu-west-3/s3/aws4_request&X-Amz-Signature=0164fcf0ef61a578f0f488bfb5ae3d3e2d0d7361657a7af4d6be6f3006d2350d)

## Get the data

to get the data modified if you use the **getData** props, you can simply do :

    const [data, setData] =  useState(json);

    useEffect(() => {
        console.log(data);
    }, [data]);

    	...

    <Tree treeData={data} getData={setData} lineStyle={{color:  "blue" }} showActions={false} />

#### License

Copyright (c) 2020 Temkit Sidali

Licensed under the MIT license.

Free as in free Beer.

Icons from [www.flaticon.com](https://www.flaticon.com/) [Those Icon](https://www.flaticon.com/authors/those-icons) [Dave Gandy](https://www.flaticon.com/authors/dave-gandy)
