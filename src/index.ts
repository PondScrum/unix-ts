import {TypeTimeStamp} from './types/enums';

export class Epoch {
    val: number
    unit: TypeTimeStamp

    constructor(val: number, unit?: TypeTimeStamp){
        this.val = val
        this.unit =  unit ??  TypeTimeStamp.Second
    }

    Test = ():number=>{
        return this.val
    }
}

export {TypeTimeStamp} from './types/enums';