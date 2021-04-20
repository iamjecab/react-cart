import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import CartItem from "./CartItem";

const Cart = () => {
    const { state, dispatch } = useGlobalContext();
    const { cartData, totalPrice } = state;

    return (
        <>
            <Heading>YOUR BAG</Heading>
            <Container>
                {cartData.length === 0 ? (
                    <Message>is currently empty</Message>
                ) : (
                    cartData.map((cartItem) => {
                        return <CartItem key={cartItem.id} {...cartItem} />;
                    })
                )}
                {cartData.length !== 0 && (
                    <>
                        <Total>
                            <Text>Total</Text>
                            <Amount>{totalPrice}</Amount>
                        </Total>
                        <ClearCart
                            onClick={() => {
                                dispatch({ type: "CLEAR_CART" });
                            }}
                        >
                            clear cart
                        </ClearCart>
                    </>
                )}
            </Container>
        </>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    max-width: 800px;
    margin: auto;
`;

const Heading = styled.h1`
    text-align: center;
    padding: 30px 20px;
`;

const Message = styled.p`
    text-align: center;
`;

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 3px solid #85c6f4;
    padding: 10px;
    margin-top: 20px;
`;

const Text = styled.p`
    font-weight: 700;
`;

const Amount = styled.p`
    font-weight: 700;
`;

const ClearCart = styled.button`
    width: 130px;
    padding: 5px 20px;
    margin: auto;
    outline: none;
    border: 0.5px solid red;
    color: red;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        background-color: #e66b6b;
        border: 0.5px solid #e66b6b;
    }
`;

export default Cart;
