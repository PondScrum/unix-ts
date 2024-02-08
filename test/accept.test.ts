import { Epoch } from '../src/index';

test('Construct Epoch', ()=>{
    let e1 = new Epoch(123, 1)
    expect(e1.Test()).toBe(123)
})

