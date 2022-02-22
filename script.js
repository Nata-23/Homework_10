"use strict";
// Person, который будет иметь следующие поля:
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
    return #salary * 12;
  }
  celebrate () {
      if (this.birthDayDate===6 || this.birthDayDate===0)
return "Happy Birthday, let’s celebrate’";
else
return "Happy Birthday, but I need to work";
  }
  
}
