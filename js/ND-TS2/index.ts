class Employee {
    

    constructor(
       public name: string, 
       public surname: string, 
       public salary: number) {
        
    }

    getName(): string {
        return this.name;
    }

    getSurname(): string {
        return this.surname;
    }

    getSalary(): number {
        return this.salary;
    }
}

const employeeForm = document.getElementById('employee-form') as HTMLFormElement;
const employeeList = document.getElementById('employee-list') as HTMLUListElement;

let employees: Employee[] = [];

function displayEmployees(): void {
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `Name: ${employee.getName()}, Surname: ${employee.getSurname()}, Salary: ${employee.getSalary()}`;
        employeeList.appendChild(li);
    });
}

function addEmployee(event: Event): void {
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const surname = (document.getElementById('surname') as HTMLInputElement).value;
    const salary = parseFloat((document.getElementById('salary') as HTMLInputElement).value);
    const employee = new Employee(name, surname, salary);
    employees.push(employee);
    displayEmployees();
    saveData();
}

function saveData(): void {
    localStorage.setItem('employees', JSON.stringify(employees));
}

function loadData(): void {
    const data = localStorage.getItem('employees');
    if (data) {
        employees = JSON.parse(data).map((employeeData: any) => {
            return new Employee(employeeData.name, employeeData.surname, employeeData.salary);
        });
        displayEmployees();
    }
}

employeeForm.addEventListener('submit', addEmployee);

loadData();