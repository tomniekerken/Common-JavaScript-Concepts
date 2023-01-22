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

// ## 4 ## Lexical Environment
// Determines where variables work and where they don't
// Global scope | Variables can be accessed in every scope
// Local scope | Variables become local for a specific scope, which could be a function
// Block scope | Variables become local "blocked" to it's braces, does not apply to the 'var' declaration
let globalVariable = 'global scope'

function localScope() {
    let localVariable = 'local scope'

    if (true) {
        let blockVariable = 'block scope'
        console.log(localVariable)
    }
}