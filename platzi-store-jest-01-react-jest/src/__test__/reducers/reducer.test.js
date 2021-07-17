import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers',()=>{
    test('Retornar initialState',()=>{
        expect(reducer({},{})).toEqual({});
    })
})