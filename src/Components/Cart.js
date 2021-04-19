import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import CartItem from "./CartItem";

const Cart = () => {
    const { state } = useGlobalContext();
    const { cartData } = state;

    return (
        <>
            <Heading>YOUR BAG</Heading>
            <Container>
                {cartData !== [] &&
                    cartData.map((cartItem) => {
                        return <CartItem key={cartItem.id} {...cartItem} />;
                    })}
            </Container>
        </>
    );
};

const Container = styled.section``;

const Heading = styled.h1``;

export default Cart;
