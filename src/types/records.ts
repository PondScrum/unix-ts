import { TimeZone, TTimeZone } from "./enums";

export const timeZoneMappings: Record<TTimeZone, string> = {
    [TimeZone.HAST]: "Pacific/Honolulu",
    [TimeZone.AKST]: "America/Anchorage",
    [TimeZone.PST]: "America/Los_Angeles",
    [TimeZone.MST]: "America/Denver", // Note: Arizona would be "America/Phoenix"
    [TimeZone.CST]: "America/Chicago",
    [TimeZone.EST]: "America/New_York",
    [TimeZone.GMT]: "Europe/London",
    [TimeZone.GST]: "Asia/Dubai",
  };