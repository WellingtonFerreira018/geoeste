import styled, { css } from 'styled-components';

import {
  secondaryBackground,
  tertiaryColor,
} from '../../styles/palets';

interface IPropsItemMenu {
  active?: boolean;
  opt?: string;
}
export const Page = styled.div`
  
  /* @media(min-width: 1000px){
    .Navb{
      height: 100px;
    }
    .space{
      padding-left: 50%;
    }
  } */

  .spaceImg{
    padding-left: 3%;
  }

  .subPage{
    font-size: large;
    font-weight: 500;
    color: white;
    padding: 10px;
    text-decoration: none;
  }
  .subPage:hover{
    background-color: white;
    color: rgb(8, 165, 238);
    border-radius: 10px; 
  }
`;

export const Nav = styled.nav`
  background-color: rgb(8, 165, 238);
  padding: 10px;
  margin-top: 0px;
  -webkit-box-shadow: 0px 10px 14px -15px rgba(138, 138, 138, 1);
  -moz-box-shadow: 0px 10px 14px -15px rgba(138, 138, 138, 1);
  box-shadow: 0px 10px 14px -15px rgba(138, 138, 138, 1);
  position: sticky;
  top: 0;
  z-index: 20000; 
  &:after {
    content: '';
    border-radius: 0;
  }
  font-size: 14px;
  ul {
    max-width: 1200px;
    padding: 0;
    margin: 0 auto;

    list-style: none;
    display: flex;
    justify-content: space-around;
    text-align:center;
  }
`;

export const NavItem = styled.li<IPropsItemMenu>`
  padding: 10px;
  margin-top: 15px;
  border-radius: 30px;
  transition: 0.3s all;
  width: 130px;
  a {
    color: white;
    text-decoration: none;

  }
  &:hover {
    background-color: ${(props) => props.opt};
    color: #fff;
    > a {
      color: rgb(8,165,238);
    }
    ul {
      display: block;
      margin-left: -70px;
    }
  }
  .DropDraw {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background:  rgb(8, 165, 238);
    border-radius: 30px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.065), inset 0 -1px 0 0 #fff,
      inset 0 0 0 1px rgba(229, 229, 229, 0.5);
    padding: 8px;
    width: 200px;
    margin-top: 10px;
    display: none;
    position: absolute;
    z-index: 1;
  }
  .lastDropDraw {
    display: flex;
    align-items: flex-start;
    background: ${secondaryBackground};
    border-radius: 8px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.065), inset 0 -1px 0 0 #fff,
      inset 0 0 0 1px rgba(229, 229, 229, 0.5);
    padding: 8px;
    width: 200px;
    margin-top: 12px;
    display: none;
    position: absolute;
    z-index: 1;
    left: 0;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: ${tertiaryColor};
      > a {
        color:  rgb(8, 165, 238);
      }
    `}
`;

export const LogoutButton = styled.div`
a {
  text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
  position: absolute;
  top: 10vw;
  left: 90%;
  transform: translate(-50%, -50%);
  background: none;
  text-align: center;

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
  border-radius: 22px;
  transition: 0.25s;
  cursor: pointer;

}
button[type="button"]:hover {
  background: rgb(4, 107, 224);
}
button[type="button"]:hover:before {
  content: "Sair" !important;
}
button[type="button"]:hover li{
  display: none;
}

`;
