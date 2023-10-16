import styled, {css} from "styled-components";

const Heading = styled.h1`
    ${props => props.as === 'h1' 
    && css`
        font-size: 3rem;
        font-weight: 600;
        color: #202020;
    `}
    ${props => props.as === 'h2' 
    && css`
        font-size: 2rem;
        font-weight: 600;
        color: #202020;
    `}
    ${props => props.as === 'h3' 
    && css`
        font-size: 2rem;
        font-weight: 400;
        color: #202020;
    `}
    
    line-height: 1.5;
`;

export default Heading