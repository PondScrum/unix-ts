import { Epoch, TimedEvent} from '../src/index';

test('Construct Epoch', ()=>{
    let e1 = new Epoch(123);
    expect(e1).toBeDefined()
})

test('Construct TimedEvent', ()=>{
    let t1 = new TimedEvent(100, 400);
    expect(t1.metaData).toBeUndefined();
    expect(t1.duration()).toBe(300);

})