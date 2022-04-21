import {cartActions, uiActions} from "./index";

export const fetchCartDATA = () => {
    return async dispatch => {
        const fetchDATA = async () => {
            const response = await fetch('https://taks-46710-default-rtdb.europe-west1.firebasedatabase.app/cart.json')

            if (!response.ok) {
                throw new Error('Could not fetch cart data!.');
            }

            return await response.json()
        }

        try {
            const cartDATA = await fetchDATA()
            dispatch(cartActions.replaceCart(cartDATA))

        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!',
                })
            );
        }
    }
}

export const sendCartDATA = (cartDATA) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );
        const sendRequest = async () => {
            const response = await fetch(
                'https://taks-46710-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cartDATA),
                }
            );

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        }

        try {
            await sendRequest()
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );

        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            );
        }
    }
}