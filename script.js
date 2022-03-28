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
    const today = new Date();
    const birthDate = new Date(this.birthDayDate);
    const nowDate = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );
    const nowDay = nowDate.getDay();
    if (isWeekend(nowDay)) return super.celebrate();
    else return "Happy Birthday, but I need to work";
  }
}

const isWeekend = (newDate) => {
  return newDate === 6 || newDate === 0;
};

const person = new Person("Ivan", "Ivanov", 25, "1989-06-06");
console.log(person);
console.log(person.celebrate());

const employee = new Employee(
  "petr",
  "petrov",
  43,
  "1978-03-28",
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
  "2008-11-12",
  "mother",
  800
);
console.log(employee1);
console.log(employee1.getYearSalary());
console.log(employee1.celebrate());
