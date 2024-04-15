"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
const employeeForm = document.getElementById('employee-form');
const employeeList = document.getElementById('employee-list');
let employees = [];
function displayEmployees() {
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `Name: ${employee.getName()}, Surname: ${employee.getSurname()}, Salary: ${employee.getSalary()}, GPM: ${employee.gpm()}, PSD: ${employee.psd()}, VSD: ${employee.vsd()}`;
        employeeList.appendChild(li);
    });
}
function addEmployee(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const employee = new Employee_1.default(name, surname, salary);
    employees.push(employee);
    displayEmployees();
    saveData();
}
function deleteEmployee(index) {
    employees.splice(index, 1);
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
            return new Employee_1.default(employeeData.name, employeeData.surname, employeeData.salary);
        });
        displayEmployees();
    }
}
employeeForm.addEventListener('submit', addEmployee);
loadData();
