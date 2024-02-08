import {
  TypeTimeStamp,
  TimeUnit,
  ISOStringFormats,
  TimeZones,
} from "./types/enums";
import { timeZoneMappings } from "./types/records";
import { mapFromSeconds, mapToSeconds } from "./helpers/coefficients";

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
  val: number;
  readonly unit: TypeTimeStamp;

  constructor(val: number, unit?: TypeTimeStamp) {
    this.val = val;
    this.unit = unit ?? TypeTimeStamp.Second;
  }

  seconds(): number {
    return this.val * mapToSeconds.get(this.unit)!;
  }

  milliseconds(): number {
    return this.seconds() * mapFromSeconds.get(TypeTimeStamp.Millisecond)!;
  }

  microseconds(): number {
    //TODO from unit --> sec --> micro
    return this.seconds() * mapFromSeconds.get(TypeTimeStamp.Microsecond)!;
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

  /**
   * Indicates whether the current Epoch instance is within the range defined by the timeline.
   *
   * @param {Epoch[]} timeline An array of Epoch instances that define a range of time.
   *                           The first element is considered the start of the range, and
   *                           the last element is considered the end of the range. The array
   *                           must contain at least two Epoch instances.
   * @returns {boolean} True if the current Epoch instance is within the inclusive range defined
   *                    by the timeline; otherwise, false.
   * @throws {Error} Throws an error if the timeline array does not contain at least two Epoch instances.
   */
  in(timeline: Array<Epoch>): boolean {
    if (timeline.length < 2) {
      throw new Error(
        "Timeline array must contain at least two Epoch instances to define a range."
      );
    }

    const thisEpochInSeconds = this.seconds();
    const startEpochInSeconds = timeline[0].seconds();
    const endEpochInSeconds = timeline[timeline.length - 1].seconds();

    return (
      thisEpochInSeconds >= startEpochInSeconds &&
      thisEpochInSeconds <= endEpochInSeconds
    );
  }

  add(epoch: Epoch): void {
    // Convert both epochs to seconds and add them
    const thisEpochInSeconds = this.seconds();
    const otherEpochInSeconds = epoch.seconds();
    const resultInSeconds = thisEpochInSeconds + otherEpochInSeconds;

    // Convert the result back to the original unit and update this.val
    this.val = resultInSeconds / (mapToSeconds.get(this.unit) || 1);
  }

  subtract(epoch: Epoch): void {
    // Convert both epochs to seconds and subtract them
    const thisEpochInSeconds = this.seconds();
    const otherEpochInSeconds = epoch.seconds();
    const resultInSeconds = thisEpochInSeconds - otherEpochInSeconds;

    // Convert the result back to the original unit and update this.val
    this.val = resultInSeconds / (mapToSeconds.get(this.unit) || 1);
  }
}

export { TypeTimeStamp } from "./types/enums";
