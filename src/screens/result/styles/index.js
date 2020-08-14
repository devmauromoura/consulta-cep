import styled from 'styled-components';
import colors from '../../../config/colors';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardContainer = styled.div`
    height: 40%;
    width: 30%;
    background-color: ${colors.cardbackground};
    border-radius: 5px;
    box-shadow: 1px 1px 3px ${colors.shadow};
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${colors.text};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const SubTitle = styled.h2`
    color: ${colors.text};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
`;

export const ResultContainer = styled.div`
    flex: 1;
`;
export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;
export const Identity = styled.text`
    color: ${colors.text};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    font-weight: bold;
`;
export const Value = styled.text`
    color: ${colors.text};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

export const Button = styled.button`
    height: 50px;
    width: 100%;
    background-color: ${colors.button};
    border: none;
    color: ${colors.buttonstext};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    font-weight: bold;
    &:hover{
        background-color: ${colors.buttonhover};
        transition: 0.5s;
    }
`;

