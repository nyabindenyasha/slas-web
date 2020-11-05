import { Component, OnInit } from '@angular/core';
import { Facaulty } from 'src/app/model/facaulty';
import { Program } from 'src/app/model/program';
import { HttpRequestComponent } from 'src/app/provider/http-request/http-request.component';
import { DataType } from 'src/app/provider/table/data-type.enum';
import { TableCompose } from 'src/app/provider/table/table-compose';
import swal from 'sweetalert2';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  programDetails: Program[];
  tableData: TableCompose;
  selected: any;
  isAdd: boolean;

  constructor(private http: HttpRequestComponent) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('/v1/programs/all', (result) => {
      console.log(result);   
       this.loadData(result);
    }
    );
  }

  loadData(programs: Program[]) {
    this.programDetails = programs;
    this.tableData = new TableCompose()
      .composeHeader('id', ' Id ', DataType.Plain)
      .composeHeader('name', ' Program', DataType.Plain)
      .composeHeader('description', ' Description', DataType.Plain)
      .composeHeader('department', ' Department', DataType.Selection, 'name')
      .setBody(this.programDetails);
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

  deleteClick(item: Facaulty) {
    this.http.delete('/v1/programs/' + item.id, (result) => {
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
