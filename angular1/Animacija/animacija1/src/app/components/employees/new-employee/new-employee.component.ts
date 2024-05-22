import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
animations:[
    trigger("inputFileds",[
      state('normal',style({
        'font-size':'16px',
        'height':'36px'

      })),
      state('focused',style({
        'font-size':'32px',
        'height':'62px'
      })),
      transition('* <=> *',[
        animate(750)
      ])

    ]),
export class NewEmpoloyeeComponent {

  public inputState=['normal','normal','normal','normal'];

 constructor(private employeesService:EmployeesService){
   

  }


  public newEmployeeSubmit(f:NgForm){
    
    this.employeesService.addEmployee(f.form.value).subscribe(()=>{

    });
  }

  public inputFocus(fieldId:number, state:boolean){
    if (state==true){
      this.inputState[fieldId]='focused';
    }else{
      this.inputState[fieldId]='normal';
    }
  }

}