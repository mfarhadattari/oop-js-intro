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

const sakib = new Player("Sakib", 19, "Blower");
console.log(sakib);
