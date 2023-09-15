//arrange
 canmin=3
//act
valor=((Math.random())*37*5)+37*5
//assert
test('37*5=valor<=37*10',() =>{
    expect(valor).toBeGreaterThanOrEqual(37*5);
    expect(valor).toBeLessThanOrEqual(37*10);
})