import { Epoch } from '../../src/index';

test('Convert Milliseconds --> Seconds', ()=>{
    let e1 = new Epoch(1000, 2);  
    expect(e1.seconds()).toBe(1);
})

test('Test addition and subtraction in place', ()=>{
    let e1 = new Epoch(100, 1);
    let e2 = new Epoch(1000, 2);
    expect(e1.seconds()).toBe(100);
    e1.add(e2);
    expect(e1.seconds()).toBe(101);
    e1.subtract(e2);
    expect(e1.seconds()).toBe(100);
})

test('Test time seconds, milliseconds, microseconds, ect.', ()=>{
    let e1 = new Epoch(1, 1);
    expect(e1.seconds()).toBe(1);
    expect(e1.milliseconds()).toBe(1_000);
    expect(e1.microseconds()).toBe(1_000_000);
})

test('Test diff + and -', ()=>{
    let e1 = new Epoch(100, 1);
    let e2 = new Epoch(50, 1);
    let e3 = new Epoch(150, 1);
    expect(e1.diff(e2)).toBe(50);
    expect(e1.diff(e3)).toBe(-50);
})

test('Test in as within', ()=>{
    let e1 = new Epoch(100, 1);
    let e2 = new Epoch(50, 1);
    let e3 = new Epoch(150, 1);
    expect(e1.in([e2, e3])).toBe(true);
    expect(e2.in([e1, e3])).toBe(false);
    expect(e3.in([e1, e2])).toBe(false);
    expect(() => e1.in([e2])).toThrow(RangeError);
})

test('Date method', ()=>{
    let e1 = new Epoch(1577836800);  
    let d1 = e1.date();
    expect(d1.toUTCString()).toBe('Wed, 01 Jan 2020 00:00:00 GMT');
})

test('Daylight savings', ()=>{
    let e1 = new Epoch(1577836800);
    let e2 = new Epoch(1590969600);
    expect(e1.isDst(-5)).toBe(false);
    expect(e2.isDst(-5)).toBe(true);
})