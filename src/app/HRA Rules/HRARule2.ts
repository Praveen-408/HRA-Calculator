export class HRARule2
{
    percentOnBasic : number;

    constructor(){
        this.initialisePercentage();
    }

    initialisePercentage(){
        this.percentOnBasic = 10;
    }

    applyRule(actualRentPaid : number, basicPlusDA : number) : number {
        return actualRentPaid - (basicPlusDA * this.percentOnBasic / 100);
    }
    
}