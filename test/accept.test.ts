import { Epoch, TypeTimeStamp } from '../src/index';

test('Construct Epoch', ()=>{
    let e1 = new Epoch(123)
    expect(e1).toBeDefined()
})

