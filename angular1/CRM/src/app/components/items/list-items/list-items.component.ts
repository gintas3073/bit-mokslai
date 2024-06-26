import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemsService } from '../../../services/items.service';
import { Item } from '../../../models/item';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../models/employee';
import { map } from 'rxjs';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  public items:Item[]=[];
  public employees:Employee[]=[];

  constructor(private itemsService:ItemsService, private employeesService:EmployeesService){
    

    //1. Užkrauname darbuotojus
    this.employeesService
      .loadEmployees()
      // Kai darbuotojai yra užkrauti
      .subscribe((data)=>{
        // Išsaugome darbuotojus
        this.employees=data;

        //2. Užkrauname visus įrašus
        this.itemsService
        .loadItems()
        // prie kiekvieno įrašo priskiriame darbuotoją kur id ir responsible_employee_id sutampa
        .pipe(
          map((data)=>{
            //Ciklas kuris eina per visus įrašus
            data.forEach((item,itemId)=>{
              //Ciklas kuris eina per visus darbuotojus
              this.employees.forEach((employee, employeeId)=>{
                if (item.responsible_employee_id==employee.id){
                  data[itemId].responsible_employee=employee;
                }
              })
            });
            return data;
          }
        ))
        //Kai gauname įrašus, juos prisiskiriame kintamajam ir atvaizduojam
        .subscribe((data: Item[])=>{
          this.items=data;
        });


      });

  }

}