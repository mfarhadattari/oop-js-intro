# OOP - JavaScript


- OOP stands for Object-Oriented Programming. It's a programming paradigm that organizes and structures code by modeling real-world entities and their interactions as objects. The core concept of OOP is to bundle data (property) and the functions (methods) that operate on that data into self-contained units called "objects". These objects can then interact with each other to perform various tasks and implement complex behaviors.

```javascript
class Player {
  constructor(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
  sayHello() {
    return `Hi, I am ${this.name}.`;
  }
}
```

## There are four main principles of OOP:

### Encapsulation:
Encapsulation refers to the concept of bundling data and methods that operate on that data into a single unit. The data is hidden from outside access, and interactions with the object are controlled through its methods. This promotes data integrity and protects it from unintended modifications.


```javascript
class Person {
  #name;
  #dateOfBirth;
  #salary;

  constructor(name, dateOfBirth, salary) {
    this.#name = name;
    this.#dateOfBirth = dateOfBirth;
    this.#salary = salary;
  }

  getName() {
    return this.#name;
  }

  #mileSecondToYear(mileSecond) {
    const result = (mileSecond / (1000 * 3600 * 24 * 365)).toFixed(2);
    return parseFloat(result);
  }

  getAge() {
    const age = this.#mileSecondToYear(
      new Date() - new Date(this.#dateOfBirth)
    );
    return age;
  }

  calculateSalary(month = 12) {
    const result = this.#salary * month;
    return result;
  }
}
```

### Abstraction: 
Abstraction involves simplifying complex reality by modeling classes based on relevant property and method, while ignoring unnecessary details. This allows programmers to focus on essential features and interactions, making code more manageable and understandable.

```javascript
class BetterArray {
  array;
  constructor() {
    this.array = [];
  }

  getArray() {
    return this.array;
  }

  addItem(item) {
    this.array = [...this.array, item];
  }

  removeItem(item) {
    this.array = this.array.filter((element) => element !== item);
  }

  modifyItem(oldItem, newItem) {
    const idx = this.array.indexOf(oldItem);
    this.array[idx] = newItem;
  }
}
```

### Inheritance: 
Inheritance enables the creation of a new class (subclass or child class) that inherits properties and method from an existing class (superclass or parent class). This promotes code reuse and allows for the extension or modification of existing classes without altering their original code.

```javascript
class Player {
  name;
  age;
  salary;
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  intro() {
    console.log(`My name is ${this.name}. I am ${this.age} years old.`);
  }
}

class Cricketer extends Player {
  century;
  constructor(name, age, salary, century) {
    super(name, age, salary);
    this.century = century;
  }
}

class Footballer extends Player {
  goals;
  constructor(name, age, salary, goals) {
    super(name, age, salary);
    this.goals = goals;
  }
}
```

### Polymorphism: 
Polymorphism allows objects of different classes to be treated as objects of a common superclass. This facilitates creating more generic and flexible code, as different objects can respond to the same method calls in a way that's specific to their individual class.

```javascript
class Player {
  #name;
  #age;
  #salary;
  constructor(name, age, salary) {
    this.#name = name;
    this.#age = age;
    this.#salary = salary;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  intro() {
    console.log(`My name is ${this.#name}. I am ${this.#age} years old.`);
  }
}

class Cricketer extends Player {
  century;
  constructor(name, age, salary, century) {
    super(name, age, salary);
    this.century = century;
  }
  intro() {
    console.log(`আমার নাম ${this.getName()} । আমার বয়স ${this.getAge()} বছর ।`);
  }
}

class Footballer extends Player {
  goals;
  constructor(name, age, salary, goals) {
    super(name, age, salary);
    this.goals = goals;
  }
}
```
