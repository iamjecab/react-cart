import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { FaAngleUp } from "react-icons/fa";

const CartItem = ({ id, title, price, img, amount }) => {
    const { dispatch } = useGlobalContext();

    return (
        <>
            <Container>
                <Img src={img}></Img>
                <InfoContainer>
                    <LeftContainer>
                        <Name>{title}</Name>
                        <Price>{price}</Price>
                        <RemoveBtn
                            onClick={() => {
                                dispatch({ type: "REMOVE_ITEM", payload: id });
                            }}
                        >
                            remove
                        </RemoveBtn>
                    </LeftContainer>
                    <RightContainer>
                        <IncreaseBtn
                            onClick={() => {
                                dispatch({ type: "INCREASE", payload: id });
                            }}
                        >
                            increase
                        </IncreaseBtn>
                        <Count>{amount}</Count>
                        <DecreaseBtn
                            onClick={() => {
                                dispatch({ type: "DECREASE", payload: id });
                            }}
                        >
                            decrease
                        </DecreaseBtn>
                    </RightContainer>
                </InfoContainer>
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    padding: 12px;
    align-items: center;
    button,
    svg {
        cursor: pointer;
    }
`;
const Img = styled.img`
    height: 100px;
`;

const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px;
`;

const Name = styled.h3``;

const Price = styled.h3`
    margin: 10px 0;
`;

const RemoveBtn = styled.button`
    border: none;
    outline: none;
    color: #2680c0;
    text-transform: capitalize;
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div``;

const Count = styled.h3`
    margin-left: 3px;
    color: #2680c0;
`;

const IncreaseBtn = styled(FaAngleUp)`
    color: #2680c0;
    margin-bottom: 10px;
`;

const DecreaseBtn = styled(FaAngleUp)`
    transform: rotate(180deg);
    color: #2680c0;
    margin-top: 10px;
`;

export default CartItem;
