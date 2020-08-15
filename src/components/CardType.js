import styled from "styled-components";

const CardType = styled.div`
    background: #202028;
    border-radius: 20px;
    width: 350px;
    height: 250px;
    flex: none;
    order: 1;
    align-self: center;

    padding-top: 60px;

    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    text-align: center;

    margin-top: 10px;

    color: ${(props) => "#" + props.colorText || "#fefefe"};
`;

export default CardType;