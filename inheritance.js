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
