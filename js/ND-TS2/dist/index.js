"use strict";
class Employee {
    constructor(name, surname, salary) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getSalary() {
        return this.salary;
    }
}
const employeeForm = document.getElementById('employee-form');
const employeeList = document.getElementById('employee-list');
let employees = [];
function displayEmployees() {
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `Name: ${employee.getName()}, Surname: ${employee.getSurname()}, Salary: ${employee.getSalary()}`;
        employeeList.appendChild(li);
    });
}
function addEmployee(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const employee = new Employee(name, surname, salary);
    employees.push(employee);
    displayEmployees();
    saveData();
}
function saveData() {
    localStorage.setItem('employees', JSON.stringify(employees));
}
function loadData() {
    const data = localStorage.getItem('employees');
    if (data) {
        employees = JSON.parse(data).map((employeeData) => {
            return new Employee(employeeData.name, employeeData.surname, employeeData.salary);
        });
        displayEmployees();
    }
}
employeeForm.addEventListener('submit', addEmployee);
loadData();
