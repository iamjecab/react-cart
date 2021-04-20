import React from "react";
import styled from "styled-components";

const Loading = () => {
    return (
        <>
            <LoadingText>Loading......</LoadingText>
        </>
    );
};

const LoadingText = styled.h1`
    text-align: center;
    font-size: 3rem;
`;

export default Loading;
