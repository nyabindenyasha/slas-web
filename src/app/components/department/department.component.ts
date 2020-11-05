import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department';
import { Facaulty } from 'src/app/model/facaulty';
import { HttpRequestComponent } from 'src/app/provider/http-request/http-request.component';
import { DataType } from 'src/app/provider/table/data-type.enum';
import { TableCompose } from 'src/app/provider/table/table-compose';
import swal from 'sweetalert2';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  DepartmentDetails: Department[];
  tableData: TableCompose;
  selected: any;
  isAdd: boolean;

  constructor(private http: HttpRequestComponent) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('/v1/departments/all', (result) => {
      console.log(result);   
       this.loadData(result);
    }
    );
  }

  loadData(Departments: Department[]) {
    this.DepartmentDetails = Departments;
    this.tableData = new TableCompose()
      .composeHeader('id', ' Id ', DataType.Plain)
      .composeHeader('name', ' Department', DataType.Plain)
      .composeHeader('description', ' Description', DataType.Plain)
      .composeHeader('facaulty', "Facaulty", DataType.Selection, 'name')
      .setBody(this.DepartmentDetails);
  }

  itemClick(item) {
    this.selected = item;
    this.isAdd = false;
  }

  addClick() {
    this.selected = {};
    this.isAdd = true;
  }

  editClick(item) {
    this.selected = item;
    this.isAdd = true;
  }

  deleteClick(item: Department) {
    this.http.delete('/v1/departments/' + item.id, (result) => {
      console.log(result);      
      swal.fire('', result.message, 'success');
      console.log(result);
      this.reload(result)
    });
  }

  reload($event) {
    setTimeout(() => {
      this.getData();
    }, 1000);
    this.isAdd = false;
    this.selected = null;
  }
}
