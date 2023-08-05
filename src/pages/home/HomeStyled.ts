import { styled } from "styled-components";

export const MainPage = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const PrincipalSection = styled.section`
    flex: 0.8;

    text-align: center;
    align-items: center;
    justify-content: center;
    
    display: flex;
    flex-direction: column;

    & > h1 {
        font-size: 1.5;
        margin-bottom: 2%;
    }

    & > h2 {
        font-size: 1rem;
        opacity: 0.7;
    }

    & > div {
        width: 80%;
        align-self: center;
        display: flex;
        flex-wrap: wrap;

        & > button {
            flex: 1;
            flex-basis: 30%;
            max-width: 30%;
            margin: 10px;
            padding: 40px;
        }

        & > span {
            width: 100%;
            text-align: center;
        }
    }
`;