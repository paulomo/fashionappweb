import * as productListActions from '../actions/';
import * as productService from '../../../../service/product/';

export function productListThunk(data) {
    console.log("product details thunk");
    return async (dispatch) => {
        dispatch(productListActions.listProductRequest());
        try {
            const productList = await productService.readAllProducts(data);
            dispatch(productListActions.listProductSuccess(productList));
        }catch(error){
            dispatch(productListActions.listProductFailure(error));
        }
    }
}