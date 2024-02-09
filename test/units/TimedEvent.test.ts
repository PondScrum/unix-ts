import { Epoch, TimedEvent } from "../../src/index";

let e1 = new Epoch(1577854800) // 01 Jan 2020 00:00:00 UTC
let e2 = new Epoch(1577858400)// 01 Jan 2020 01:00:00 UTC
let unit = new TimedEvent(e1, e2)

test("Construct TimedEvent from numbers", ()=>{
    const te = new TimedEvent(0, 100);
    expect(te).toBeInstanceOf(TimedEvent);
})

test("Check duration measurement", ()=>{
    //One hour apart
    expect(unit.duration()).toBe(60*60); 
})

test("Bind metadata", ()=>{
    let meta = {
        name: "Test",
        maxDuration: new Epoch(100)
    }
    let te = new TimedEvent(e1, e2, meta);
    expect(te.duration() > te.metaData.maxDuration).toBe(true); 
})
