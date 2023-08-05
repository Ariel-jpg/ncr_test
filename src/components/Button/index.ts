import { styled } from "styled-components";

export default styled.button`
    background-color: #32CD32;
    color: white;
    border-radius: 10px;
    border: solid 1px transparent;
    cursor: pointer;

    & > strong {
        font-weight: normal;
    }
`;