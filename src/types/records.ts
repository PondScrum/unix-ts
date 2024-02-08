import { TimeZone } from "./enums";

export const timeZoneMappings: Record<TimeZone, string> = {
    [TimeZone.HAST]: "Pacific/Honolulu",
    [TimeZone.AKST]: "America/Anchorage",
    [TimeZone.PST]: "America/Los_Angeles",
    [TimeZone.MST]: "America/Denver", // Note: Arizona would be "America/Phoenix"
    [TimeZone.CST]: "America/Chicago",
    [TimeZone.EST]: "America/New_York",
    [TimeZone.GMT]: "Europe/London",
    [TimeZone.GST]: "Asia/Dubai",
  };