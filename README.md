# selector-generator

A core JS lib which adds a method to window object using which we can get the css selector for any valid DOM Element


## Example - 1


```javascript

var DomNode = document.getElementById('main-div');
_generateSelector(DomNode);

// Output 
div#main-div

```

## Example - 2


```javascript

var listElementNode = document.getElementsByClassName('third')[0];
_generateSelector(listElementNode);

// Output
div#main-div > div:nth-child(1).inner-class-div > ul:nth-child(2) > li:nth-child(3).third.list

```

## Example - 3


```javascript

var imageElementNode = document.getElementById('my-image');
_generateSelector(imageElementNode);

// Output 
div#main-div > div:nth-child(1).inner-class-div > div:nth-child(4).image-div > img#my-image

```


## Author
Krishcdbry (krishcdbry@gmail.com)

## Demo
Click here (https://krishcdbry.github.io/selector-generator/demo/)

## License
MIT @[krishcdbry](krishcdbry.com)