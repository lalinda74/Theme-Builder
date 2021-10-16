import styled from "styled-components";

export const StyledCardContainer = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    margin: 1rem 15rem;
    padding: 10px;

    @media only screen and (min-width: 728px) and (max-width: 1024px) {
        margin: 1rem 4rem;
    }

    @media only screen and (max-width: 728px) {
        margin: 1rem 1rem;
    }
`;