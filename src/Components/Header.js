import React from "react";
import styled from "styled-components";
import { HiShoppingBag } from "react-icons/hi";
import { useGlobalContext } from "../Context/index";

const Header = () => {
    const { state } = useGlobalContext();
    const { totalItems } = state;

    return (
        <>
            <Container>
                <Heading>shopping cart</Heading>
                <IconContainer>
                    <ItemAmount>{totalItems}</ItemAmount>
                    <CartIcon />
                </IconContainer>
            </Container>
        </>
    );
};

const Container = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: relative;
    background-color: #2680c0;
    color: white;
`;

const Heading = styled.h1`
    text-transform: capitalize;
`;

const IconContainer = styled.div``;

const CartIcon = styled(HiShoppingBag)`
    font-size: 2.8rem;
`;

const ItemAmount = styled.h4`
    position: absolute;
    top: 7px;
    right: 0px;
    background-color: #85c6f4;
    padding: 3px 10px;
    border-radius: 50%;
    font-size: 20px;
`;

export default Header;
