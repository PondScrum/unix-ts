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
    UTC = 0,
    EST = -5
}