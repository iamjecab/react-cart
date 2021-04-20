import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/reducer";

const GloblaContext = React.createContext();

const url = `https://course-api.com/react-useReducer-cart-project`;

const initialState = {
    isLoading: true,
    cartData: [],
    totalPrice: 0,
    totalItems: 0,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getData = async () => {
        try {
            dispatch({ type: "SET_LOADING", payload: true });
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            dispatch({ type: "GET_DATA", payload: data });
            dispatch({ type: "SET_LOADING", payload: false });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        dispatch({ type: "GET_TOTAL_ITEMS" });
        dispatch({ type: "GET_TOTAL_PRICE" });
    }, [state.cartData]);

    return (
        <GloblaContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </GloblaContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GloblaContext);
};

export default AppProvider;
