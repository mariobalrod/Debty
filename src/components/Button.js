import styled from "styled-components";

const Button = styled.button`
  display: flex;
  position: relative;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 15px;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  background-color: #4e4e50;
  color: #fefefe;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(255,255,255,1);
  }
`;

export default Button;