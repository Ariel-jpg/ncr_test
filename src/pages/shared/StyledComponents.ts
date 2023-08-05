import { styled } from "styled-components";

export const Footer = styled.footer`
    flex: 0.1;
    padding-bottom: 20px;

    & > button {
        padding: 25px 40px 25px 40px;
        margin-left: 20px;
    }
`;

export const Header = styled.header`
    flex: 0.1;
    background-color: #32CD32;
    display: flex;
    align-items: center;
    cursor: pointer;

    & > img { margin-left: 20px; }
`;
