import styled from "styled-components";

export type ElementLiProps = {
    transform?: string;
}

export const ElementStyle = styled.button<ElementLiProps>`
    border: none;
    background-color: transparent;
    outline: none;

    font-size: 1.3em;
    :hover{
        color: rgb(8, 165, 238);
    }
    
`;

export const ElementLi = styled.li<ElementLiProps>`
::before {
    content: "▶";
    display: block;
    height: 0;
    width: 0;
    font-size: 0.8em;
    left: -3em;
    top: 0.2em;
    position: relative;
    transform: ${props=>props.transform};
}
:hover {
   color: rgb(8, 165, 238); 
}

`;