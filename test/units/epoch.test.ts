import { Epoch, TypeTimeStamp } from '../../src/index';

test('Convert Milliseconds --> Seconds', ()=>{
    let e1 = new Epoch(1000, TypeTimeStamp.Millisecond)
    expect(e1.seconds()).toBe(1)
})