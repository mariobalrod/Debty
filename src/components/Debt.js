import React from 'react';
import styled from "styled-components";

// Components
import ClearIcon from '@material-ui/icons/Clear';

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 15px;
    margin-top: 25px;

    color: ${(props) => props.colorText || "white"};
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 2px solid #FEFEFE;
    box-sizing: border-box;

    font-style: normal;
    font-size: 15px;
    line-height: 36px;

    text-align: center;

`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;

    position: relative;
    height: auto;
`;

const Description = styled.div`
    display: flex;
    padding: 0px;
    width: 60%;
    
    position: relative;
    height: auto;
`;

const Value = styled.div`
    display: flex;
    padding: 0px;
    
    position: relative;
    width: 30%;
    height: auto;
`;

const Button = styled.button`
    display: flex;
    position: relative;
    width: auto;
    border: 0;
    outline: 0;
    background: transparent;
    box-sizing: border-box;
    text-decoration: none;
    color: #fefefe;
    text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    text-align: center;
`;

export default function Debt (props) {

    const { description, value, id } = props.debt;

    return (
        <Container>
            <Content>
                <Description>{description}</Description>
                <Value>{value}</Value>
                <Button onClick={props.removeDebt.bind(this, id)}>
                    <ClearIcon />
                </Button>
            </Content>
        </Container>
    );
}