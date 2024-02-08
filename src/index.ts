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
        return this.seconds() * (mapFromSeconds.get(TypeTimeStamp.Millisecond)!);
    }

    microseconds():number {
        //TODO from unit --> sec --> micro
        return this.seconds() * (mapFromSeconds.get(TypeTimeStamp.Microsecond)!);
    }

    /**
     * Calculates the difference between two Epoch instances and returns the difference
     * in the unit of the current Epoch instance.
     *
     * @param {Epoch} epoch - The Epoch instance to compare with.
     * @returns {number} - The difference in the current Epoch's unit.
     */
    diff(epoch: Epoch): number {
        // First, convert both Epoch instances to seconds
        const currentEpochInSeconds = this.val * (mapToSeconds.get(this.unit) || 1);
        const otherEpochInSeconds = epoch.val * (mapToSeconds.get(epoch.unit) || 1);
        // Calculate the difference in seconds
        const differenceInSeconds = currentEpochInSeconds - otherEpochInSeconds;
        // Convert the difference back to the current Epoch's unit
        return differenceInSeconds * (mapFromSeconds.get(this.unit) || 1);
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