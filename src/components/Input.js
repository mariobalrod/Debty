import styled from 'styled-components';

const Input = styled.input`
  display: flex;
  position: relative;
  padding: 3px;
  padding-left: 15px;
  margin: 15px;
  width: ${(props) => props.inputSize+"px" || "auto"};

  color: white;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #FEFEFE;
  box-sizing: border-box;  
`;

export default Input;