import { Component, OnInit } from '@angular/core';
import { Facaulty } from 'src/app/model/facaulty';
import { HttpRequestComponent } from 'src/app/provider/http-request/http-request.component';
import { DataType } from 'src/app/provider/table/data-type.enum';
import { TableCompose } from 'src/app/provider/table/table-compose';
import swal from 'sweetalert2';

@Component({
  selector: 'app-facaulty',
  templateUrl: './facaulty.component.html',
  styleUrls: ['./facaulty.component.css']
})
export class FacaultyComponent implements OnInit {

  facaultyDetails: Facaulty[];
  tableData: TableCompose;
  selected: any;
  isAdd: boolean;

  constructor(private http: HttpRequestComponent) { }

  ngOnInit() {
    this.getFacaulties();
  }

  getFacaulties() {
    this.http.get('/v1/facaulty/all', (result) => {
      console.log(result);   
       this.loadFacaulties(result);
    }
    );
  }

  loadFacaulties(facaulties: Facaulty[]) {
    this.facaultyDetails = facaulties;
    this.tableData = new TableCompose()
      .composeHeader('id', ' Id ', DataType.Plain)
      .composeHeader('name', ' Facaulty', DataType.Plain)
      .composeHeader('description', ' Description', DataType.Plain)
      .setBody(this.facaultyDetails);
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
    this.http.delete('/v1/facaulty/' + item.id, (result) => {
      console.log(result);      
      swal.fire('', result.message, 'success');
      console.log(result);
      this.reload(result)
    });
  }

  reload($event) {
    setTimeout(() => {
      this.getFacaulties();
    }, 1000);
    this.isAdd = false;
    this.selected = null;
  }

}
