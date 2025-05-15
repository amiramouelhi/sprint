console.log(document.getElementsByTagName('div'))
console.log(document.getElementsByClassName('box'))
console.log(document.getElementById('list'))

function each(arr,callBack){
    for (var i=0;i<arr.length;i++) {
      callBack(arr[i],index)
    }
}

var paragraph=document.createElement('p')
var text=document.createTextNode('hello world')
paragraph.appendChild(text);
console.log(paragraph.textContent)

var cities = ['San Francisco', 'Cairo', 'Tokyo', 'Nairobi'];
