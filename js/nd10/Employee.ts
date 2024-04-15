class Employee {
    

    constructor(
        public name: string, 
        public surname: string, 
        public salary: number) {
        
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getSurname(): string {
        return this.surname;
    }

    setSurname(surname: string): void {
        this.surname = surname;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(salary: number): void {
        this.salary = salary;
    }

    gpm(): number {
        return this.salary * 0.2;
    }

    psd(): number {
        return this.salary * 0.0698;
    }

    vsd(): number {
        return this.salary * 0.1252;
    }
}

export default Employee;