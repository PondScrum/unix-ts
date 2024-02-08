import { TimeZones } from "../types/enums"; 

export function isDaylightSavingTime(date: Date, timeZone: TimeZones): boolean {
    // Adjust the input date to the time zone
    const year = date.getUTCFullYear();
    const adjustedDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
                                  date.getUTCHours() + timeZone, date.getUTCMinutes(), date.getUTCSeconds());

    // DST starts on the second Sunday in March
    const dstStart = new Date(year, 2, 14, 2); // 2:00 AM on March 14th - latest possible second Sunday
    dstStart.setUTCDate(14 - dstStart.getUTCDay()); // Adjust to the second Sunday
    // DST ends on the first Sunday in November
    const dstEnd = new Date(year, 10, 7, 2); // 2:00 AM on November 7th - latest possible first Sunday
    dstEnd.setUTCDate(7 - dstEnd.getUTCDay()); // Adjust to the first Sunday

    return adjustedDate >= dstStart && adjustedDate < dstEnd;
}

export function getCurrentTimeForTimeZone(timeZone: TimeZones): Date {
    const now = new Date();
    const utcNow = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
                            now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

    let offset = timeZone;
    if (timeZone === TimeZones.PST || timeZone === TimeZones.MST || 
        timeZone === TimeZones.CST || timeZone === TimeZones.EST) {
        // Check if DST should be applied to these time zones
        if (isDaylightSavingTime(now, timeZone)) {
            offset += 1; // Adjust for DST
        }
    } else if (timeZone === TimeZones.AKST) {
        // Alaska observes daylight saving time, so adjust if necessary
        offset = isDaylightSavingTime(now, timeZone) ? TimeZones.AKDT : timeZone;
    } else if (timeZone === TimeZones.HAST) {
        // Hawaii does not observe daylight saving time, so no adjustment necessary
        offset = timeZone;
    } 
    // Add other time zones that observe DST as necessary

    // The Arizona exception for MST is not handled here and should be handled separately,
    // as it requires knowledge about the specific location within Arizona.

    return new Date(utcNow + (offset * 3600000)); // Convert offset from hours to milliseconds
}