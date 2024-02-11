import { TypeTimeStamp, TimeUnit } from "../types/enums";

export const mapToSeconds = new Map([
    [TypeTimeStamp.Microsecond, .000001],
    [TypeTimeStamp.Millisecond, .001],
    [TypeTimeStamp.Second, 1],
    //[TimeUnit.Minute, 60],
    //[TimeUnit.Hour, 3_600],
    //[TimeUnit.Day, 86_400],
    //[TimeUnit.BusinessWeek, 432_000],
    //[TimeUnit.Week, 604_800],
    //[TimeUnit.Month, 2_628_288],
    //[TimeUnit.Year, 31_536_000],
    //[TimeUnit.Decade, 315_576_000],
]);

export const mapFromSeconds = new Map([
    [TypeTimeStamp.Microsecond, 1_000_000],
    [TypeTimeStamp.Millisecond, 1_000],
    [TypeTimeStamp.Second, 1],
    //[TimeUnit.Minute, 60],
    //[TimeUnit.Hour, 3_600],
    //[TimeUnit.Day, 86_400],
    //[TimeUnit.BusinessWeek, 432_000],
    //[TimeUnit.Week, 604_800],
    //[TimeUnit.Month, 2_628_288],
    //[TimeUnit.Year, 31_536_000],
    //[TimeUnit.Decade, 315_576_000],
]);


