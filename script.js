"use strict";

class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = birthDayDate;
  }

  celebrate() {
    return "Happy Birthday, let's celebrate'";
  }
}

class Employee extends Person {
  #salary = 500;
  constructor(firstName, lastName, age, birthDayDate, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
  }
  getYearSalary() {
    return this.#salary * 12;
  }
  celebrate() {
    this.date = new Date(this.birthDayDate);
    this.newDay = this.date.getDay();
    if (this.newDay === 6 || this.newDay === 0)
      return "Happy Birthday, let’s celebrate’";
    else return "Happy Birthday, but I need to work";
  }
}

const person = new Person("ivan", "ivanov", 25, "1989-02-03");
console.log(person);
console.log(person.celebrate());

const employee = new Employee("petr", "petrov", 30, "2022-02-12", "ingineer");
console.log(employee);
console.log(employee.getYearSalary());
console.log(employee.celebrate());

const employee1 = new Employee("Marta", "Super", 26, "2022-02-09", "mother");
console.log(employee1);
console.log(employee1.getYearSalary());
console.log(employee1.celebrate());
