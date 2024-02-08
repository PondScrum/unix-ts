import { TimeZones } from "../types/enums"; 

export function isDaylightSavingTime(date: Date): boolean {
    const year = date.getFullYear();
    // DST starts on the second Sunday in March
    const dstStart = new Date(year, 2, 14); // March 14th - latest possible second Sunday
    dstStart.setDate(14 - dstStart.getDay()); // Adjust to the second Sunday
    // DST ends on the first Sunday in November
    const dstEnd = new Date(year, 10, 7); // November 7th - latest possible first Sunday
    dstEnd.setDate(7 - dstEnd.getDay()); // Adjust to the first Sunday

    return date >= dstStart && date < dstEnd;
}

export function getCurrentTimeForTimeZone(timeZone: TimeZones): Date {
    const now = new Date();
    const utcNow = now.getTime() + (now.getTimezoneOffset() * 60000);
    const isDst = isDaylightSavingTime(now);

    // If it's DST, adjust the time zones that observe DST
    let offset;
    switch (timeZone) {
        case TimeZones.EDT:
        case TimeZones.CDT:
        case TimeZones.MDT:
        case TimeZones.PDT:
            offset = isDst ? timeZone : timeZone + 1; // Adjust time zones that observe DST
            break;
        case TimeZones.MST:
            offset = isDst ? TimeZones.MDT : timeZone; // Arizona exception (doesn't observe DST, except for the Navajo Nation)
            break;
        default:
            offset = timeZone; // Time zones that do not observe DST
    }

    return new Date(utcNow + (offset * 3600000)); // Convert offset from hours to milliseconds
}

