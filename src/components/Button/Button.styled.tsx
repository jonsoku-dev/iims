import styled from "@emotion/styled";

export const Wrapper = styled.button`
  box-sizing: border-box;
  font-size: 30px;
  color: red;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: ${(props) => props.theme.space}px;
`