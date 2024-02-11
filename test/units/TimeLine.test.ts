import { Epoch, TimedEvent, TimeLine } from "../../src/index";

const ts_start = 1577836800; // 01 Jan 2020 00:00:00 UTC
const event_arr = [
    {start: ts_start + 20_000, end: ts_start + 40_000, sort_index_start: 2, sort_index_end: 2},
    {start: ts_start + 0, end: ts_start + 15_000, sort_index_start: 0, sort_index_end: 0},
    {start: ts_start + 35_000, end: ts_start + 500_000, sort_index_start: 3, sort_index_end: 4},
    {start: ts_start + 200_000, end: ts_start + 400_000, sort_index_start: 4, sort_index_end: 3},
    {start: ts_start + 15_000, end: ts_start + 33_000, sort_index_start: 1, sort_index_end: 1},
];

let gen_arr = ()=>{
    return event_arr.map((e)=>{
        let start = new Epoch(e.start);
        let end = new Epoch(e.end);

        return new TimedEvent(start, end, {sort_index_start: e.sort_index_start, sort_index_end: e.sort_index_end})
    })
};


test('Test sort asc', ()=>{
    // Sort by start time
    let t1 = new TimeLine(gen_arr());
    expect(t1.events[0].metaData.sort_index_start).toBe(2);
    t1.sort();
    let si = -1;
    t1.events.forEach((event: TimedEvent) => {
       expect(event.metaData.sort_index_start).toBeGreaterThan(si);
       si = event.metaData.sort_index_start;
    });

    // Sort by end time
    t1.sort(true, "end");
    si = -1;
    t1.events.forEach((event: TimedEvent) => {
        expect(event.metaData.sort_index_end).toBeGreaterThan(si);
        si = event.metaData.sort_index_end;
     });
})

test('Test sort desc', ()=>{
    // Sort by start time
    let t1 = new TimeLine(gen_arr());
    expect(t1.events[0].metaData.sort_index_start).toBe(2);
    t1.sort(false);
    let si = 100;
    t1.events.forEach((event: TimedEvent) => {
       expect(event.metaData.sort_index_start).toBeLessThan(si);
       si = event.metaData.sort_index_start;
    });

    // Sort by end time
    t1.sort(false, "end");
    si = 100;
    t1.events.forEach((event: TimedEvent) => {
       expect(event.metaData.sort_index_end).toBeLessThan(si);
       si = event.metaData.sort_index_end;
    });
})
