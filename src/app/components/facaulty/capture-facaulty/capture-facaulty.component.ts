import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Facaulty } from 'src/app/model/facaulty';
import { HttpRequestComponent } from 'src/app/provider/http-request/http-request.component';
import { Validation } from 'src/app/provider/validation/validation';
import { ValidationType } from 'src/app/provider/validation/validation-type.enum';
import  swal  from 'sweetalert2'

@Component({
  selector: 'app-capture-facaulty',
  templateUrl: './capture-facaulty.component.html',
  styleUrls: ['./capture-facaulty.component.scss']
})
export class CaptureFacaultyComponent implements OnInit {

  @Input() facaulty;
  @Output() data: EventEmitter<any> = new EventEmitter<Facaulty>();
  validation: Validation;

  constructor(private http: HttpRequestComponent) {
  }

  ngOnInit() {
    if (this.facaulty == null) this.facaulty = new Facaulty();
    this.loadValidation();
  }

  loadValidation() {
    this.validation = new Validation();
    this.validation.addField({ name: 'name', display: ' Name', type: ValidationType.Required });
  }

  onSubmit() {
    console.log(this.facaulty);

    if (this.facaulty.id > 0) {
      this.http.update('/v1/facaulty/' + this.facaulty.id, this.facaulty, (result) => swal.fire('', result.message, 'success'));
      this.data.emit(this.facaulty);
      return;
    } else {
      this.http.post('/v1/facaulty', this.facaulty, (result) => swal.fire('', result.message, 'success'));
      this.data.emit(this.facaulty);
    }
  }

}
