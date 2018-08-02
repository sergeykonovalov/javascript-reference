# Handy Notes on JavaScript

## Code of Conduct

- check what is returned and handle nulls, undefined, empty things and errors
- error handling on controller level, not to clutter logic on service and repository (also means low coupling)

## General

## Grammar and Types

### Dynamic Typing

### Expressions and Operators

### Import and Export

### **undefined** and **null**

### Basic Syntax

### Variable Scope

### Hoisting

### Data Structures and Types

### Literals

## Control Flow

### if...else

### switch

### try/catch/throw

### **Error** Objects

#### EvalError

#### InternalError

#### RangeError

#### ReferenceError

#### SyntaxError

#### TypeError

#### URIError

## Promises

### Chaining

### Error Handling

## Loops and Iterations

### for

### while

### do...while

### break/continue

### for..in

### for..of

## Functions

### Definition

### Function Scope

### Closure

### Arguments and Parameters

### Arrow Functions

### Methods

.call
.apply
.bind

## Expressions and Operators

### Assignment and Comparison

### Arithmetics

### Bitwise and Logical Operators

### Ternary Operator

## Number and Dates

### **Number** Object

### Math Object

### Date Object

### Timeouts and Intervals

## String Formatting

### **String** Object

.toUpperCase
.toLowerCase

### Templates

### Internationalisation

### Regular Expressions

## Indexed Collections

### **Arrays** Objects

.forEach
.map
.sort
.filter
.some

#### Looping Arrays

### Typed Arrays

## Keyed Collections

### Map

### WeakMap

### Set

### WeakSet

## Working with **Objects**

### Destructuring

### Properties

### Creation

### Methods

### Getters and Setters

### Prototype-based OOP

### Object Hierarchies

### Inheritance

## Iterators and Generators

### Iterators

### Generators

## Meta Programming

### Proxy

### Reflect

## DOM

### querySelector

```JavaScript
document.querySelector('#id-name').addEventListener('click', function(event) {
  event.preventDefault();
  let elementValue = event.target.elements.elementName.value; // assuming <name='elementName'>
});
```

- `event.target` object holds reference to DOM element
- checkboxes are exceptions, use `checked` instead of `value`

### id, class, title, name, alttext, type, placeholder

### Forms

- `name` attribute is a ket for value which will be submitted, hence recommend camelCase format
- define `id` for each form
- default action for submit is full page refresh

### Elements

.createElement
.appendChild

### Event Handling

.change
.click
.input

### Storage

## Document Object

## Window Object

## XMLHttpRequest

## CSS Object

## Web Workers

## WebSockets

## JSON

## Standard Objects

### **Boolean** Object

### **Symbol Object**

## Async Programming

### async/await

## Patterns
