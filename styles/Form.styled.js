import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    border-radius: 5px;
    background: ${({ theme }) => theme.itemsBg};
    margin: 30px 0;
    padding: 10px 0;
    transition: background-color .3s ease;

    & > button {
        padding: 11.25px;
        margin: 10px 20px;
        border-radius: 50%;
        border: none;
        background: ${({theme}) => theme.primary.checkBackground};
        cursor: pointer;
    }

    & input {
        color: ${({ theme }) => theme.colors.lightGrayishBlue};
    }
`;