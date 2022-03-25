function ExampleConstructor() {

}

console.log('Prototype:', ExampleConstructor.__proto__);
console.log('Type of:', typeof ExampleConstructor);

var newFunction = new ExampleConstructor();
console.log('new function:', newFunction);

var instance = newFunction instanceof ExampleConstructor;
console.log('instance of', instance);
