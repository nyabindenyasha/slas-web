import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Department } from 'src/app/model/department';
import { Facaulty } from 'src/app/model/facaulty';
import { HttpRequestComponent } from 'src/app/provider/http-request/http-request.component';
import { Validation } from 'src/app/provider/validation/validation';
import { ValidationType } from 'src/app/provider/validation/validation-type.enum';
import swal from 'sweetalert2';

@Component({
  selector: 'app-capture-department',
  templateUrl: './capture-department.component.html',
  styleUrls: ['./capture-department.component.scss']
})
export class CaptureDepartmentComponent implements OnInit {

  @Input() department;
  @Output() data: EventEmitter<any> = new EventEmitter<Facaulty>();
  facaulties: Facaulty[];
  validation: Validation;

  constructor(private http: HttpRequestComponent) {
    this.http.get('/v1/facaulty/all', (result) => {
      console.log(result);   
       this.facaulties = result;
    }
    );
  }

  ngOnInit() {
    if (this.department == null) this.department = new Department();
    this.loadValidation();
  }

  loadValidation() {
    this.validation = new Validation();
    this.validation.addField({ name: 'name', display: ' Name', type: ValidationType.Required });
  }

  onSubmit() {
    console.log(this.department);

    if (this.department.id > 0) {
      this.http.update('/v1/departments/' + this.department.id, this.department, (result) => swal.fire('', result.message, 'success'));
      this.data.emit(this.department);
      return;
    } else {
      this.http.post('/v1/departments', this.department, (result) => swal.fire('', result.message, 'success'));
      this.data.emit(this.department);
    }
  }


}
