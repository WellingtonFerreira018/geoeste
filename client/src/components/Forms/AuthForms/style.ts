import styled from "styled-components";

export type spanProps = {
  top: string;
  left: string;

}

export type boxBorderProps = {
  border?: string;
}

export const CheckMark = styled.div<spanProps>`
.checkmark {
  position: absolute;
  top: ${props=>props.top};
  left:  ${props=>props.left};
  height: 20px;
  width: 20px;
  background-color: #eee;
  
border-radius: 15px;
}

:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkmark:after {
  left: 7.5px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 1px 1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
`

export const Form = styled.form<boxBorderProps>`

a {
  text-decoration: none;
}

label {
  color: rgb(8, 165, 238);
  font-size: 14px;
  float: revert;
  text-align: center;
  display: block;

}

.common:hover {
  color: rgb(3, 72, 151);
}

.checking{
  position: absolute;
  cursor: pointer;
  height: 0;
  width: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: white;
}
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: none;
  border: 1px solid rgb(8, 165, 238);
  border: ${props=>props.border};
  text-align: center;

 input[type="text"],

 input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 1px solid rgb(8, 165, 238);
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: rgb(3, 72, 151);
  border-radius: 24px;
  transition: 0.25s;
}
 input[type="text"]:focus,
 input[type="password"]:focus {
  width: 280px;
  border-color: rgb(8, 165, 238);
}

  input[type="file"] {
    display: none;
  }
  .custom-file-upload {
    border: 0;
    font-size: 12px;
    background-color: rgb(8, 165, 238);
    display: block;
    margin: 10px auto;
    text-align: center;
    border: 1px solid rgb(8, 165, 238);
    padding: 12px 8px;
    width: 300px;
    outline: none;
    color: white;
    border-radius: 22px;
    transition: 0.25s;
    cursor: pointer;
  }

  .custom-file-upload:hover {
    background: rgb(4, 107, 224);
  }

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

`
export const Form1 = styled.form`
a {
  text-decoration: none;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
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
`
