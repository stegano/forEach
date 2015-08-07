# forEach(for Async)

forEach(collection[, eachCallback[ ,doneCallback]]);
---
####collection
Type: `Array|Object|number`

####eachCallback
Argument: `index|key, value, directive` 

#####What is directive?
- directive has `break` and `continue` functions. It is similar to `break` and` continue` of Native Javascript.
- below see example :)

####doneCallback
- execute when all eachCallback is over.
```js
/* example */
var arr = [1,2,3,4,5,6,7,8,9,10];
forEach(arr, 
  function(idx, val, directive) {
    // asynchronous eachCallback;
    directive.continue(val%2 === 0); // OR if(val%2 === 0) directive.contine();
    console.log('eachCallback: '+idx);
  },
  function() {
    // asynchronous doneCallback
    console.log('doneCallback');
  });

/* Result */
eachCallback : 0
eachCallback : 2
eachCallback : 4
eachCallback : 6
eachCallback : 8
doneCallback
```
```javascript
/* example */
var arr = [];
forEach(100, 
  function(idx, val, directive) {
    // asynchronous eachCallback;
    directive.break(idx === 5); // OR if(idx === 5) directive.break();
    // `val` is undefined.
    arr.push(idx);
    console.log('arr.push/ '+ idx);
  },
  function() {
  // asynchronous doneCallback;
    console.log(arr);
  });

/* Result */
arr.push/ 1
arr.push/ 2
arr.push/ 3
arr.push/ 4
arr.push/ 5
[0, 1, 2, 3, 4, 5]
```
```js
/* example */
var obj = {a: 10, b: 20, c: 30};
forEach(obj, 
  function(key, val, directive) {
    // asynchronous eachCallback;
    console.log(key+ ' is '+ val);
  });

/* Result */
a is 10
b is 20
c is 30
```

