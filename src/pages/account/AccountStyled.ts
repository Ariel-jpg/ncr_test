import { styled } from "styled-components";

export const AccountMainPage = styled.main` 
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;


export const PrincipalSection = styled.section` 
    flex: 0.8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > h1 { font-size: 2rem; margin-bottom: 40px }

    & > h2 {
        font-weight: normal;
        font-size: 1rem;
    }

    & > div {
        display: flex;
        flex-direction: column;
        height: 30%;
        box-sizing: border-box;
        justify-content: space-evenly;
    }
`;