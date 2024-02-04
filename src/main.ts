import {TypeTimeStamp} from './enums';

export class Epoch {
    val: bigint
    unit: TypeTimeStamp

    constructor(val: bigint, unit?: TypeTimeStamp){
        this.val = val
        this.unit =  unit ??  TypeTimeStamp.Second
    }

    Test = ():bigint=>{
        return this.val
    }
}