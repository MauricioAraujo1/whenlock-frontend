import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme['blue-dark']};

`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin-left: 235px;
    margin-top: 27rem;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`