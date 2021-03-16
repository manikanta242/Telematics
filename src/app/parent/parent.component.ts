import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  private employeeDetails: Array<any>;
  employeeDet: FormGroup;
  constructor(private FormBuilder: FormBuilder) {
    this.employeeDetails = [
      { id: '1', name: 'Manikanta', salary: 30000, designation: 'MEAN stack Developer', doj: "12/12/2019" },
      { id: '2', name: 'ram', salary: 40000, designation: 'Software Developer', doj: "12/12/2019" },
      { id: '3', name: 'raj', salary: 50000, designation: 'Full stack Developer', doj: "12/12/2019" },
      { id: '4', name: 'samuel', salary: 60000, designation: 'Java Developer', doj: "12/12/2019" },
      { id: '5', name: 'anusha', salary: 70000, designation: 'HR', doj: "12/12/2019" },
      { id: '6', name: 'rajesh', salary: 80000, designation: 'Team lead', doj: "12/12/2019" }
    ]
  }

  ngOnInit() {
    this.employeeDet = this.FormBuilder.group({
      id: '',
      name: '',
      salary: '',
      designation: '',
      doj: ''
    })
  }
  delete(id) {
    this.employeeDetails = this.employeeDetails.filter(e => {
      return e.id != id
    })
  }
  view(id) {
    this.employeeDetails = this.employeeDetails.filter(f => {
      return f.id == id
    })
  }
  AddMe() {
    this.employeeDet.value.id = this.employeeDetails.length + 1;
    this.employeeDetails.push(this.employeeDet.value);
  }

}
