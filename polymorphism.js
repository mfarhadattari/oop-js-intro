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

const sakib = new Cricketer("sakib", 35, 100000, 20);
sakib.intro();

const masi = new Footballer("masi", 50, 200000, 100);
masi.intro();
