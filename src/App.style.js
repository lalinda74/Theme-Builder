import styled from "styled-components";

export const StyledContainer = styled.div(({theme}) =>`
  font-family: ${theme.font};
`);

export const StyledHeader = styled.h1`
  font-size: 1.8rem;
  text-align: left;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;