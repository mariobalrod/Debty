import styled from 'styled-components';

const Input = styled.input`
  display: flex;
  position: relative;
  padding: 3px;
  padding-left: 15px;
  margin: 15px;
  width: ${(props) => props.inputSize+"px" || "auto"};
  color: black;
  background: white;
  border-radius: 3px;

  &:hover {
    border-color: rgba(255, 255, 255, 1);
  }
`;

export default Input;