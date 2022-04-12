import styled from "styled-components";
import bg from '../../assets/images/bg-login.png';

export const Container = styled.div`
    display: flex;
    background: #060A10;
    height: 100%;
`;

export const Title = styled.h1`
    margin-bottom: 30px;
`;

export const Content = styled.div`
    background: #060A10;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 100px;
`;

export const Background = styled.div`
    width: 100%;;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    justify-self: end;
`;