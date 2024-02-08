export const enum TypeTimeStamp {
    Second = 1,
    Millisecond,
    Microsecond
};

export const enum TimeUnit {
    Second = 1,
    Millisecond,
    Microsecond,
    Minute,
    Hour,
    Day,
    BusinessWeek,
    Week,
    Month,
    Year,
    Decade,
};

//TODO implement common formats
export const enum ISOStringFormats { 
    ShortDate = "YYYY-MM-DD", // ISO format for date only
    FullDate = "YYYY-MM-DDThh:mm:ss.sssZ", // ISO format for date and time
    FullDateWithOffset = "YYYY-MM-DDThh:mm:ss.sss±hh:mm", // ISO format with time zone offset
    WeekDate = "YYYY-Www-D", // ISO format for week date
    OrdinalDate = "YYYY-DDD" // ISO format for ordinal date (day of the year)
}

//TODO implement common formats
export const enum TimeZones {
    // United States Time Zones with standard and daylight saving time
    HAST = -10, // Hawaii-Aleutian Standard Time (UTC-10 hours)
    AKST = -9,  // Alaska Standard Time (UTC-9 hours)
    AKDT = -8,  // Alaska Daylight Time (UTC-8 hours)
    PST = -8,   // Pacific Standard Time (UTC-8 hours)
    PDT = -7,   // Pacific Daylight Time (UTC-7 hours)
    MST = -7,   // Mountain Standard Time (UTC-7 hours) - Note: Arizona does not observe DST except for the Navajo Nation
    MDT = -6,   // Mountain Daylight Time (UTC-6 hours)
    CST = -6,   // Central Standard Time (UTC-6 hours)
    CDT = -5,   // Central Daylight Time (UTC-5 hours)
    EST = -5,   // Eastern Standard Time (UTC-5 hours)
    EDT = -4,   // Eastern Daylight Time (UTC-4 hours)

    // Other Time Zones
    GMT = 0,    // Greenwich Mean Time (UTC+0 hours) - Dublin, Ireland (Note: DST is observed here as Irish Standard Time, IST)
    GST = 4,    // Gulf Standard Time (UTC+4 hours) - Dubai and Abu Dhabi (Note: DST is not observed in these locations)
}