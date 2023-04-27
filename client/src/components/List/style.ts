import styled from "styled-components";

export const ListStyle = styled.ul`
    text-align: left;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 0.5em;
    }
    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }

    label {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        vertical-align: middle;
        margin-top: -15px;
    }
`;