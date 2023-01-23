// #
// #
// 1 Console
// #
// #
console.log('Hello World!')

// #
// #
// 2 Defining variables
// #
// #
// 'var' was the common way to define variables but is now obsolete
// 'var' will not apply to the block scope of ## 4 ##
// 'let' is the common standard for determining a variable 
// 'const' can be also used to determine a variable, but it's value cannot change after defining
// a variable declared with the 'const' keyword must be assigned a value at the time of declaration.
var varVariable
let letVariable
const constVariable = "value"

// #
// #
// 3 Primitive data types
// #
// #
// A primitive data type is a classification of data that dictates the type of value it can represent and the operations that can be performed on it.
// primitive arguments are passed by value, which means a copy is created of the original variable
let string = "Hello World"
let number = 42
let bigint = 42n
let boolean = true
let undefined
let symbol = Symbol("my private property")
let nullVar = null

// #
// #
// 4 (Basic) Mathematical operations
// #
// #
// These methematical operations do not contain operations done using math object methods
let x = 1
let y = 2

let addition = x + y
let subtraction = x - y
let multiplication = x * y
let division = x / y
let modulus = x % y
let exponentiation = x ** y

// #
// #
// 5 Lexical environment
// #
// #
// Determines where variables work and where they don't
// Global scope | Variables can be accessed in every scope
// Local scope | Variables become local for a specific scope, which could be a function
// Block scope | Variables become local "blocked" to it's braces, does not apply to the 'var' declaration
// 'var' variables will be hoisted
let globalVariable = 'global scope'

function localScope() {
    globalVariable = 'can be used here'

    let localVariable = 'local scope'

    if (true) {
        globalVariable = 'can be used here aswell'
        localVariable = 'can also be used here'

        let blockVariable = 'block scope'
        var hoistedVariable = 'block scope, but will be hoisted to the local scope'
    }
}

localScope()

// #
// #
// 6 Function building blocks
// #
// #
// Functions can also be used as functions expressions, allowing them to be used as variables
// Higher-order functions use functions as an argument or a return value
// Functions can also be nested to create a closure
x = 1
y = 2

function standardFunction(x, y) {
    return x + y
}

const functionExpression = function(x, y) {
    return x + y
}

const arrowFunction = () => {
    return x + y
}

// This is a higher-order function because it takes a function as an argument
// and it returns a function as a result
// The returned function is also a closure since it has access to the multiplier variable
// Higher-order makes the code more reusable
// Closures are often used to create private variables/methods, which can only be accessed and modified by the inner function
// keeping them hidden and protected from the global scope
function higherOrder(multiplier) {
    return function(number) { // This is the closure function because it has access to the 'multiplier' variable from its parent scope
        return number * multiplier
    }
}

let double = higherOrder(2)
console.log(double(5)) // Output: 10

let triple = higherOrder(3)
console.log(triple(5)) // Output: 15

// #
// #
// 7 wtf is -> this
// #
// #
// 'This' is a keyword that references an object based on how a function is called
function wtfIsThis() {
    console.log(this) // references the global/window object
}

const person = {
    wtfIsThis: function () {
        console.log(this) // this will be a reference to that object
    }
}
person.wtfIsThis()
person.wtfIsThis.call(person)
const wtf = person.wtfIsThis.bind(person)
wtf()

const arrowPerson = {
    wtfIsThis: () => {
        console.log(this)
    }
}

// #
// #
// 8 Objects
// #
// #
// Objects are passed by reference (stored in the heap memory), that means multiple parts of the code might be mutating the same object
const obj = { a: 1 } // will change to 2 after function is called
const initialNumber = 1 // will stay the same

// changes the original object 'obj'
function changeReferencedObject(obj) {
    obj.a = 2
}
changeReferencedObject(obj) // will change initial 'obj.a' to 2

// uses the 'initialNumber' but it's original variable stays the same since JavaScript passes a copy of primitive arguments
function changeInitialNumber(number) {
    number = 2
}
changeInitialNumber(initialNumber) // creates a copy of primitive argument 'initialNumber' and it's variable value will stay the same