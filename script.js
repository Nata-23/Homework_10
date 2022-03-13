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
  #salary;
  constructor(firstName, lastName, age, birthDayDate, jobPosition, salary) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
    this.#salary = salary;
  }
  getYearSalary() {
    return this.#salary * 12;
  }
  celebrate() {
    if (isWeekend(this.birthDayDate)) return super.celebrate();
    else return "Happy Birthday, but I need to work";
  }
}

const isWeekend = (newDate) => {
  const date = new Date(newDate);
  const newDay = date.getDay();
  return newDay === 6 || newDay === 0;
};

const person = new Person("Ivan", "Ivanov", 25, "1989-02-03");
console.log(person);
console.log(person.celebrate());

const employee = new Employee(
  "petr",
  "petrov",
  43,
  "1978-23-11",
  "ingineer",
  500
);
console.log(employee);
console.log(employee.getYearSalary());
console.log(employee.celebrate());

const employee1 = new Employee(
  "Marta",
  "Super",
  26,
  "1983-06-06",
  "mother",
  800
);
console.log(employee1);
console.log(employee1.getYearSalary());
console.log(employee1.celebrate());
