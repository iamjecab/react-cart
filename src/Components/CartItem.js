import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";

const CartItem = ({ id, title, price, img, amount }) => {
    const { dispatch } = useGlobalContext();

    return (
        <>
            <Container>
                <Img src={img}></Img>
                <Name>{title}</Name>
                <Price>{price}</Price>
                <RemoveBtn
                    onClick={() => {
                        dispatch({ type: "REMOVE_ITEM", payload: id });
                    }}
                >
                    remove
                </RemoveBtn>
                <Count>{amount}</Count>
                <ToggleBtn
                    onClick={() => {
                        dispatch({ type: "INCREASE", payload: id });
                    }}
                >
                    increase
                </ToggleBtn>
                <ToggleBtn
                    onClick={() => {
                        dispatch({ type: "DECREASE", payload: id });
                    }}
                >
                    decrease
                </ToggleBtn>
            </Container>
        </>
    );
};

const Container = styled.div``;
const Img = styled.img``;

const Name = styled.h3``;

const Price = styled.h3``;

const RemoveBtn = styled.button``;

const Count = styled.h3``;

const ToggleBtn = styled.button``;

export default CartItem;
