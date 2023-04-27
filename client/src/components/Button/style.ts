import styled from "styled-components";

export type BtnProps = {
  p: string;
  l?: string;
}

export const DownloadBtn = styled.div<BtnProps>`

  button[type="button"] {
  border: 0;
  background-color: rgb(8, 165, 238);
  display: block;
  margin: 10px auto;
  text-align: center;
  text-decoration: none;
  border: 1px solid rgb(8, 165, 238);
  padding: 12px 8px;
  width: 100px;
  outline: none;
  color: white;
  z-index: 10000;
  position: absolute;
  border-radius: 22px;
  transition: 0.25s;
  cursor: pointer;
  left: ${props=>props.l}%;
  bottom: ${props=>props.p}vh;
  outline-style: none;
}
button[type="button"]:hover {
  background: rgb(4, 107, 224);
}
`
