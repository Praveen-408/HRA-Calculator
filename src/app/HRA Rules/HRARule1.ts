export class HRARule1
{
    percentOnBasicForMetro : number;
    percentOnBasicForNonMetro : number;

    constructor(){
        this.initialisePercentages();
    }

    initialisePercentages(){
        this.percentOnBasicForMetro = 50;
        this.percentOnBasicForNonMetro = 40;
    }

    applyRule(basicPlusDA : number, metro : boolean) : number {
        if(metro == true)
            return (basicPlusDA * this.percentOnBasicForMetro / 100);
        return (basicPlusDA * this.percentOnBasicForNonMetro / 100);
    }

}