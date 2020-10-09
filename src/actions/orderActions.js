import { CREATE_ORDER, CLEAR_ORDER, CLEAR_CART } from "../types";

export const createOrder = (order) => async (dispatch) => {

    fetch("api/orders",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    }).then((res)=> res.json())
    .then((data) => {

        dispatch({
            type: CREATE_ORDER,
            payload: data
        });

        localStorage.clear("cartItems");
        dispatch({type: CLEAR_CART });
    });
}

export const clearOrder = () => (dispatch) => {

    //localStorage.clear("cartItems"); //don't do this which is only give up order but still keep cart items
    dispatch({type: CLEAR_ORDER });
}