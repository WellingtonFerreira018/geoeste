import styled from "styled-components";

export type legendColors = {
  color:string;
}

export const Li = styled.li<legendColors>`


padding-left: 0; 

::before {
  content: "•"; /* Insert content that looks like bullets */
  font-size:3.5vw;
  padding-right: 4px;
  vertical-align:middle;
  color: ${props=>props.color}; /* Or a color you prefer */
}

.btn{
  background: none!important;
  border: none;
  font-size:.84vw;
  :hover{
    color: rgb(8, 165, 238);
  }
}
`
