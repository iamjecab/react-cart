import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <Container>
                <Heading>shopping cart</Heading>
                <IconContainer>
                    <CartIcon />
                </IconContainer>
            </Container>
        </>
    );
};

const Container = styled.header``;

const Heading = styled.h1``;

const IconContainer = styled.div``;

const CartIcon = styled(FaShoppingCart)``;

export default Header;
