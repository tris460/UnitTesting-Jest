const text="Hola Mundo";
const fruits=['manzana','melon','sandia','uva'];
let n1=28;
let n2=20;

test('Debe contener un texto', ()=>{
    expect(text).toMatch(/Mundo/);
})

test('El array contiene: melon',()=>{
    expect(fruits).toContain('melon');
})

test('N1 es mayor que N2',()=>{
    expect(n1).toBeGreaterThan(n2);
})

test('Es verdadero',()=>{
    expect(true).toBeTruthy();
})

const reverseString=(str, callback) => {
    callback(str.split("").reverse().join(""))
}

test('Probar un callback',()=>{
    reverseString('Hola Mundo', (str)=> {
        expect(str).toBe('odnuM aloH');
    })
})

const reverseString2 = str => {
    return new Promise((resolve,reject)=>{
        if(!str){
            reject(Error('Error'));
        }
        resolve(str.split("").reverse().join(""));
    })
}

test('Probar una promesa',()=>{
    return reverseString2("Hola Mundo")
        .then(string=>{
            expect(string).toBe('odnuM aloH');
        })
})