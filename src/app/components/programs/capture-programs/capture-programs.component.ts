import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Department } from 'src/app/model/department';
import { Facaulty } from 'src/app/model/facaulty';
import { HttpRequestComponent } from 'src/app/provider/http-request/http-request.component';
import { Validation } from 'src/app/provider/validation/validation';
import { ValidationType } from 'src/app/provider/validation/validation-type.enum';
import swal from 'sweetalert2';

@Component({
  selector: 'app-capture-programs',
  templateUrl: './capture-programs.component.html',
  styleUrls: ['./capture-programs.component.scss']
})
export class CaptureProgramsComponent implements OnInit {

  @Input() program;
  @Output() data: EventEmitter<any> = new EventEmitter<Facaulty>();
  departments: Department[];
  validation: Validation;

  constructor(private http: HttpRequestComponent) {
    this.http.get('/v1/departments/all', (result) => {
      console.log(result);   
       this.departments = result;
    }
    );
  }

  ngOnInit() {
    if (this.program == null) this.program = new Facaulty();
    this.loadValidation();
  }

  loadValidation() {
    this.validation = new Validation();
    this.validation.addField({ name: 'name', display: ' Name', type: ValidationType.Required });
  }

  onSubmit() {
    console.log(this.program);

    if (this.program.id > 0) {
      this.http.update('/v1/programs/' + this.program.id, this.program, (result) => swal.fire('', result.message, 'success'));
      this.data.emit(this.program);
      return;
    } else {
      this.http.post('/v1/programs', this.program, (result) => swal.fire('', result.message, 'success'));
      this.data.emit(this.program);
    }
  }

}
