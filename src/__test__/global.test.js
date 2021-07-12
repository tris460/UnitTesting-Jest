const text="Hola Mundo";
const fruits=['manzana','melon','sandia','uva'];

test('Debe contener un texto', ()=>{
    expect(text).toMatch(/Mundo/);
})

test('El array contiene: melon',()=>{
    expect(fruits).toContain('melon');
})