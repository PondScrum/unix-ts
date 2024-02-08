import {TypeTimeStamp, TimeUnit, ISOStringFormats, TimeZones} from './types/enums';
import { mapFromSeconds, mapToSeconds } from './helpers/coefficients';

export class Epoch {
    val: number
    readonly unit: TypeTimeStamp

    constructor(val: number, unit?: TypeTimeStamp){
        this.val = val
        this.unit =  unit ?? TypeTimeStamp.Second
    }

    seconds():number {
        return this.val * (mapToSeconds.get(this.unit)!)
    }

    milliseconds():number {
        //TODO from unit --> sec --> milli
        return 1
    }

    microseconds():number {
        //TODO from unit --> sec --> micro
        return 1
    }

    diff(epoch: Epoch):number {
        //TODO implement diff, returning in unit of this epoch
        return 1
    }

    in(timeline: Array<Epoch>):boolean {
        //TODO this epoch within min - max
        return true
    }

    add(epoch: Epoch):void {
        //TODO Add time in place
    }

    subtract(epoch: Epoch):void {
        //TODO Subtract time in place
    }

    toString(isoFormat: ISOStringFormats, timeZone: TimeZones  = TimeZones.UTC):string {
        //TODO implement string in compliance with common ISO formats.
        return isoFormat
    }

}

export {TypeTimeStamp} from './types/enums';