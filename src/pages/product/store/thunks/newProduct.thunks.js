import * as newProductActions from '../actions/';
import * as productService from '../../../../service/product/';

export function newProductThunk(data) {
    console.log("new product thunk");
    return async (dispatch) => {
        dispatch(newProductActions.createProductRequest());
        try {
            const newProduct = await productService.createProduct(data);
            dispatch(newProductActions.createProductSuccess(newProduct));
        }catch(error){
            dispatch(newProductActions.createProductFailure(error));
        }
    }
}