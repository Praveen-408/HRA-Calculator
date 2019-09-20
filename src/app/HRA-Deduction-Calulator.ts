import { FormGroup } from '@angular/forms';
import { HRARule1 } from './Models/HRARule1';
import { HRARule2 } from './Models/HRARule2';

export class HRADeductionCalulator
{
    HRARule1 : HRARule1;
    HRARule2 : HRARule2;

    constructor(){
        this.HRARule1 = new HRARule1();
        this.HRARule2 = new HRARule2();
    }

    computeDeductedHRA(HRACalculator : FormGroup) : number {
        let basicPlusDA : number = HRACalculator.get('basicSalary').value + HRACalculator.get('DA').value;
        let rentPaid : number =  HRACalculator.get('rentPaid').value;
        let HRAReceived : number =  HRACalculator.get('HRAReceived').value;
        let metroFlag : number =  HRACalculator.get('metroFlag').value;
        return Math.min(HRAReceived, this.HRARule1.applyRule(basicPlusDA, metroFlag == 1), this.HRARule2.applyRule(rentPaid, basicPlusDA));
    }

}