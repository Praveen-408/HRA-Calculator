import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HRADeductionCalulator } from '../HRA-Deduction-Calulator';

@Component({
  selector: 'app-hra-calulation',
  templateUrl: './hra-calulation.component.html',
  styleUrls: ['./hra-calulation.component.css']
})
export class HRACalulationComponent implements OnInit {

  HRACalculator : FormGroup;
  deductedHRA : number;
  HRADeductionCalulator : HRADeductionCalulator;

  constructor(private fb : FormBuilder) {
    this.initialiseFormFields();
    this.HRADeductionCalulator = new HRADeductionCalulator();
  }

  ngOnInit() {
  }

  initialiseFormFields(){
    this.HRACalculator = this.fb.group({
      basicSalary : new FormControl(''),
      DA : new FormControl(''),
      HRAReceived : new FormControl(''),
      rentPaid : new FormControl(''),
      metroFlag : new FormControl(''),
      exemptedHRA : new FormControl({value : '', disabled : true}),
      taxableHRA : new FormControl({value : '', disabled : true})
    });
  }

  calculateHRA(){
    this.deductedHRA = this.HRADeductionCalulator.computeDeductedHRA(this.HRACalculator);
    this.HRACalculator.patchValue({
      exemptedHRA : this.deductedHRA,
      taxableHRA : this.HRACalculator.get('HRAReceived').value - this.deductedHRA
    }); 
  }

}
