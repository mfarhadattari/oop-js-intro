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

const farhad = new Person("Mohammad Farhad", "2005-04-19", 15000);
console.log(farhad.getAge());
console.log(farhad.calculateSalary(12));
