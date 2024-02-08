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
    ShortDate = "dd/mm/yy"
}

//TODO implement common formats
export const enum TimeZones {
    UTC = 0,
    EST = -5
}