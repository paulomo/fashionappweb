import * as productDetailActions from '../actions/';
import * as productService from '../../../../service/product/';

export function productDetailThunk(id) {
    console.log("product details thunk");
    return async (dispatch) => {
        dispatch(productDetailActions.detailsProductRequest());
        try {
            const productDetail = await productService.readOneProduct(id);
            dispatch(productDetailActions.detailsProductSuccess(productDetail));
        }catch(error){
            dispatch(productDetailActions.detailsProductFailure(error));
        }
    }
}