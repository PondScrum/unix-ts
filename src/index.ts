import {TypeTimeStamp, TimeUnit, ISOStringFormats, TimeZones} from './types/enums';
import { mapFromSeconds, mapToSeconds } from './helpers/coefficients';

/**
 * Represents a specific point in time, referred to as an epoch.
 * The epoch is stored internally as a number with a unit of time.
 *
 * @class
 * @param {number} val - The numeric value of the time.
 * @param {TypeTimeStamp} [unit=TypeTimeStamp.Second] - The unit of time for the value provided.
 *        The default unit is seconds if not specified.
 *
 * @example
 * // Create an Epoch instance representing 5000 milliseconds
 * const epochMillis = new Epoch(5000, TypeTimeStamp.Millisecond);
 *
 * @example
 * // Create an Epoch instance with the default unit of seconds
 * const epochSeconds = new Epoch(60);
 */

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
        return this.seconds() * 1000;
    }

    microseconds():number {
        //TODO from unit --> sec --> micro
        return this.seconds() * 1000000;
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