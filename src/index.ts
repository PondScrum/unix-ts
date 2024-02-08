import {TypeTimeStamp} from './types/enums';

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

export {TypeTimeStamp} from './types/enums';