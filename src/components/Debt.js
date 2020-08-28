import React from 'react';
import styled from "styled-components";

// Components
import ClearIcon from '@material-ui/icons/Clear';

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 15px;
    margin-top: 25px;

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

    color: ${(props) => "#" + props.colorText || "#fefefe"};
    
    position: relative;
    height: auto;
`;

const Value = styled.div`
    display: flex;
    padding: 0px;

    color: ${(props) => "#" + props.colorText || "#fefefe"};
    
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
    text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    text-align: center;
`;

export default function Debt (props) {

    const [ color, setColor ] = React.useState();

    const { description, value, type } = props.debt;

    React.useEffect(() => {
        if (type) {
            setColor('62c15d');
        } else {
            setColor('d65555');
        }
    }, [type]);

    return (
        <Container>
            <Content>
                <Description colorText={color}>{description}</Description>
                <Value colorText={color}>{value}</Value>
                <Button  colorText={color} onClick={props.removeDebt.bind(this, props.debt)}>
                    <ClearIcon/>
                </Button>
            </Content>
        </Container>
    );
}