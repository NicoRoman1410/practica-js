//arrange
let aleatorio=Math.floor((Math.random()*37*5)+37*5);
//act
let ruleta=aleatorio%37;
//assert
test('0<=aleatorio<=36', ()=>{
    expect(ruleta).toBeGreaterThanOrEqual(0);
    expect(ruleta).toBeLessThanOrEqual(36);
})