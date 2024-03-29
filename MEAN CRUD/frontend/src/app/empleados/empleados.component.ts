import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { EmpleadosService } from '../shared/empleados.service';
import { Empleados } from '../shared/empleados.model';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadosService]
})
export class EmpleadosComponent implements OnInit {

 

  constructor(public empleadosService: EmpleadosService) {

    
  }
  
  ngOnInit(){
    
    this.resetForm();
    this.refrescarListaDeEmpleados();
  }

  resetForm(form?: NgForm) {
    if(form)
      form.reset();
    this.empleadosService.selectEmpleado = {
      _id: "",
      nombre: "",
      posicion: "",
      office: "",
      direccion: "",
      salario: ""
    }
    
  }

  onSubmit(form: NgForm){
    if(form.value._id == ""){
      this.empleadosService.postEmpleado(form.value).subscribe((res) => {
        this.refrescarListaDeEmpleados();
        M.toast({html: 'Se Guardo Correctamente', classes: 'rounded'});
        window.location.reload();
      });
    }else{
      this.empleadosService.putEmpleado(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refrescarListaDeEmpleados();
        M.toast({html: 'Se Actualizo Correctamente', classes: 'rounded'})
      });
    }

  }
 
  refrescarListaDeEmpleados() {
    this.empleadosService.getEmpleadoList().subscribe((res) => {
        this.empleadosService.Empleados = res as Empleados[];
    });
  }

  onEdit(emp: Empleados) {
    this.empleadosService.selectEmpleado = emp;
  }
  onDelete(_id: string, form: NgForm) {
    if (confirm('Estas Seguro que deseas eliminarlo ?') == true) {
      this.empleadosService.deleteEmpleado(_id).subscribe((res) =>{
        this.refrescarListaDeEmpleados();
        // this.resetForm(form);
        M.toast({ html: 'Eliminado Correctamente', classes: 'rounded' });
        
      });
    }
  }

} 
