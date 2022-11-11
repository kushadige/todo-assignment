import styled from "styled-components";

export const StyledList = styled.ul`
    & > li {
        background: ${({ theme }) => theme.itemsBg};
        transition: background-color .3s ease;
        display: flex;
        align-items: center;
        padding: 20px 0;
        position: relative;
        border-bottom: 1px solid ${({ theme }) => theme.colors.veryDarkGrayishBlue};

        &:first-of-type {
            border-radius: 5px 5px 0 0;
        }

        & > p {
            position: relative;
            overflow: hidden;
            transition: color .3s ease;
            color: ${({ theme }) => theme.colors.lightGrayishBlue};

            &::before {
                transition: transform .3s ease;
                width: 100%;
                position: absolute;
                content: '';
                top: 50%;
                transform: translate(-100%, -50%);
                height: 2px;
            }
        }

        & > p.active {
            color: ${({ theme }) => theme.colors.darkGrayishBlue};
            &::before {
                transform: translate(0, -50%);
                background: ${({ theme }) => theme.colors.darkGrayishBlue};
            }
        }
    }
`;

export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    background: ${({checked, theme}) => checked ? theme.primary.checkBackground : 'inherit'};
    width: 22.5px;
    height: 22.5px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.veryDarkGrayishBlue};
    border-radius: 50%;
    &:is(:hover, :focus, :active) {
        border: 1px solid ${({ theme }) => theme.colors.veryDarkGrayishBlue};
    }

    & > img {
        width: 50%;
        height: 40%;
    }
`;