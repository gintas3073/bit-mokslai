"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, surname, salary) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSurname() {
        return this.surname;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    gpm() {
        return this.salary * 0.2;
    }
    psd() {
        return this.salary * 0.0698;
    }
    vsd() {
        return this.salary * 0.1252;
    }
}
exports.default = Employee;
