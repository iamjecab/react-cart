import React from "react";
import Cart from "./Components/Cart";
import GlobalStyles from "./Components/GlobalStyles";
import Header from "./Components/Header";
import { useGlobalContext } from "./Context";
import Loading from "./Components/Loading";
const App = () => {
    const { state } = useGlobalContext();
    const { isLoading } = state;
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <GlobalStyles />
                    <Header />
                    <Cart />
                </>
            )}
        </>
    );
};

export default App;
