# Handy Notes on JavaScript

## Code of Conduct

- check what is returned and handle nulls, undefined, empty things and errors
- error handling on controller level, not to clutter logic on service and repository (also means low coupling)

## General

### Strict Mode

- any variable has to be declard before use
- `use strict`


## Debugging

- add statement `debugger` in the place, where you want browser to stop and show state
- only works when developer tools open

## Grammar and Types

### Dynamic Typing

#### Type Coercion

Automatically change type, e.g. truthy/falsy.
Coercion can be into: number, string or boolean.
Coercion is reason why recommended to use triple equal sign.
Use `typeof` to explicitly get correct type of variable.

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

Array `arguments` includes all arguments passed into function.

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
.findIndex
.splice

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

(!) Prototype is a property of constructor function.
(!) Changes made in code to prototype will be reflected on every existing instance.
If you define a function as object property, while this property has same name as prototype, JS will first look into the function.

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

```JavaScript
let newDiv = document.createElement('div');
let subDiv = document.createElement('span');
subDiv.textContent = 'some text';
subDiv.setAttribute('id', '12345');
newDiv.appendChild(subDiv);

```

### Event Handling

.change
.click
.input

### Storage

#### localStorage

- `localStorage` is a global variable
- only supports strings (use JSON.parse() and JSON.stringify())
- if no data found, null is returned => check for nulls

```JavaScript
localStorage.setItem('key', value);
localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear(); // for all
```

#### Cookies

#### Session Storage

#### Indexed DB

## Document Object

## Window Object

## XMLHttpRequest

## CSS Object

## Web Workers

## WebSockets

## JSON

## Standard Objects

### **Boolean** Object

Any JS object is truthy (resolved to true in boolean context) or falsy.

Falsy: false, 0, empty string, null, undefined.


### **Symbol Object**

## Async Programming

### async/await

## Patterns
