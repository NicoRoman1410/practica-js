//aragne
let nroanterior=4
//act
let nroactual=5
//assert
test('el nro actaldespues de hacer las vueltas',() => {
    expect(nroactual).toBeGreaterThanOrEqual(1);
    // expect(nroactual).toBeLessThanOrEqual(10);
    // expect(nroactual).toBe(nroanterior+1);
})