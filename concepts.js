// ## 1 ## Console
console.log('Hello World!')

// ## 2 ## Defining variables
// 'var' was the common way to define variables but is now obsolete
// 'var' will not apply to the block scope of ## 4 ##
// 'let' is the common standard for determining a variable 
// 'const' can be also used to determine a variable, but it's value cannot change after defining
// a variable declared with the 'const' keyword must be assigned a value at the time of declaration.
var varVariable
let letVariable
const constVariable = "value"

// ## 3 ## Primitive data types
// A primitive data type is a classification of data that dictates the type of value it can represent and the operations that can be performed on it.
let string = "Hello World"
let number = 42
let bigint = 42n
let boolean = true
let undefined
let symbol = Symbol("my private property")
let nullVar = null

// ## 4 ## (Basic) Mathematical operations
// These methematical operations do not contain operations done using math object methods
let x = 1
let y = 2

let addition = x + y
let subtraction = x - y
let multiplication = x * y
let division = x / y
let modulus = x % y
let exponentiation = x ** y

// ## 5 ## Lexical environment
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

// ## 6 ## Function building blocks
// Functions can also be used as functions expressions, allowing them to be used as variables
x = "input parameter"
y = "input parameter"

function basicFunction(x, y) {
    return console.log(x, y)
}

const functionExpression = function(x, y) {
    return console.log(x, y)
}