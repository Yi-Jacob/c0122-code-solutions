function ExampleConstructor() {

}

console.log('Prototype:', ExampleConstructor.prototype);
console.log('Type of:', typeof ExampleConstructor);

var newFunction = new ExampleConstructor();
console.log('new function:', newFunction);

var instance = newFunction instanceof ExampleConstructor;
console.log('instance of', instance);
