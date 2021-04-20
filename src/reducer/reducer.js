const reducer = (state, action) => {
    const { cartData } = state;

    // Loading
    const { type, payload } = action;
    if (type === "SET_LOADING") {
        return { ...state, isLoading: payload };
    }

    // intial data fetching
    if (type === "GET_DATA") {
        return { ...state, cartData: payload };
    }
    // totol itmes in  cart
    if (type === "GET_TOTAL_ITEMS") {
        if (cartData.length === 0) {
            return { ...state, totalItems: 0 };
        } else {
            const items = cartData.reduce((accumultor, element) => {
                return accumultor + element.amount;
            }, 0);

            return { ...state, totalItems: items };
        }
    }

    // total price of cart
    if (type === "GET_TOTAL_PRICE") {
        if (cartData.length === 0) {
            return { ...state, totalPrice: 0 };
        } else {
            const price = cartData.reduce((accumultor, element) => {
                const { amount } = element;
                return parseFloat(
                    parseFloat(
                        parseFloat(element.price) * amount + accumultor
                    ).toFixed(2)
                );
            }, 0);

            return { ...state, totalPrice: price };
        }
    }

    // increase item in cart

    if (type === "INCREASE") {
        const newCart = cartData.map((element) => {
            const { id, amount } = element;
            if (id === payload) {
                return { ...element, amount: amount + 1 };
            } else {
                return element;
            }
        });
        return { ...state, cartData: newCart };
    }

    // decrease item in cart

    if (type === "DECREASE") {
        const newCart = cartData.map((element) => {
            const { id, amount } = element;
            if (id === payload) {
                return { ...element, amount: amount - 1 };
            } else {
                return element;
            }
        });
        const tempCart = newCart.filter((element) => element.amount !== 0);

        return { ...state, cartData: tempCart };
    }

    // clear cart

    if (type === "CLEAR_CART") {
        return { ...state, cartData: [] };
    }

    // remove item from cart

    if (type === "REMOVE_ITEM") {
        const newCart = cartData.filter((element) => element.id !== payload);
        return { ...state, cartData: newCart };
    }
};

export default reducer;
