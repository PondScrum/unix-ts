import { TimeZones } from "./enums";

export const timeZoneMappings: Record<TimeZones, string> = {
    [TimeZones.HAST]: "Pacific/Honolulu",
    [TimeZones.AKST]: "America/Anchorage",
    [TimeZones.PST]: "America/Los_Angeles",
    [TimeZones.MST]: "America/Denver", // Note: Arizona would be "America/Phoenix"
    [TimeZones.CST]: "America/Chicago",
    [TimeZones.EST]: "America/New_York",
    [TimeZones.GMT]: "Europe/London",
    [TimeZones.GST]: "Asia/Dubai",
  };