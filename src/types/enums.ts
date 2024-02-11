export const TypeTimeStamp = {
    Second: 1,
    Millisecond: 2,
    Microsecond: 3
} as const;

export type TTypeTimeStamp = 
    | typeof TypeTimeStamp.Second
    | typeof TypeTimeStamp.Millisecond
    | typeof TypeTimeStamp.Microsecond
;

export const TimeUnit = {
    Second: 1,
    Millisecond: 2,
    Microsecond: 3,
    Minute: 4,
    Hour: 5,
    Day: 6,
    BusinessWeek: 7,
    Week: 8,
    Month: 9,
    Year: 10,
    Decade: 11,
} as const;

export type TTimeUnit = 
| typeof TimeUnit.Second
| typeof TimeUnit.Millisecond
| typeof TimeUnit.Microsecond 
| typeof TimeUnit.Minute
| typeof TimeUnit.Hour
| typeof TimeUnit.Day 
| typeof TimeUnit.BusinessWeek
| typeof TimeUnit.Week
| typeof TimeUnit.Month 
| typeof TimeUnit.Year
| typeof TimeUnit.Decade
;

//TODO implement common formats
export const ISOStringFormat = { 
    ShortDate: "YYYY-MM-DD", // ISO format for date only
    FullDate: "YYYY-MM-DDThh:mm:ss.sssZ", // ISO format for date and time
    FullDateWithOffset: "YYYY-MM-DDThh:mm:ss.sss±hh:mm", // ISO format with time zone offset
    WeekDate: "YYYY-Www-D", // ISO format for week date
    OrdinalDate: "YYYY-DDD" // ISO format for ordinal date (day of the year)
} as const;

export type TISOStringFormat =
    | typeof ISOStringFormat.ShortDate
    | typeof ISOStringFormat.FullDate
    | typeof ISOStringFormat.FullDateWithOffset
    | typeof ISOStringFormat.WeekDate
    | typeof ISOStringFormat.OrdinalDate
;

//TODO implement common formats
export const TimeZone = {
    // United States Time Zones with standard and daylight saving time
    HAST: -10, // Hawaii-Aleutian Standard Time (UTC-10 hours)
    AKST: -9,  // Alaska Standard Time (UTC-9 hours)
    PST: -8,   // Pacific Standard Time (UTC-8 hours)
    MST: -7,   // Mountain Standard Time (UTC-7 hours) - Note: Arizona does not observe DST except for the Navajo Nation
    CST: -6,   // Central Standard Time (UTC-6 hours)
    EST: -5,   // Eastern Standard Time (UTC-5 hours)

    // Other Time Zones
    GMT: 0,    // Greenwich Mean Time (UTC+0 hours) - Dublin, Ireland (Note: DST is observed here as Irish Standard Time, IST)
    UTC: 0,    // Coordinated Universal Time (UTC+0 hours) - Reykjavik, Iceland
    GST: 4,    // Gulf Standard Time (UTC+4 hours) - Dubai and Abu Dhabi (Note: DST is not observed in these locations)
    
    //AZ except for Navajo Nation
    AZ: -7
} as const;

export type TTimeZone =
    | typeof TimeZone.HAST
    | typeof TimeZone.AKST
    | typeof TimeZone.PST
    | typeof TimeZone.MST
    | typeof TimeZone.CST
    | typeof TimeZone.EST
    | typeof TimeZone.GMT
    | typeof TimeZone.UTC
    | typeof TimeZone.GST
    | typeof TimeZone.AZ
;