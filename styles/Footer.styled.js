import styled from "styled-components";

export const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.itemsBg};
    transition: background-color .3s ease;
    display: flex;
    align-items: center;
    padding: 17.5px 20px;
    border-radius: 0 0 5px 5px;
    user-select: none;

    & > div:is(:nth-of-type(1), :nth-of-type(3)) {
        color: ${({ theme }) => theme.colors.darkGrayishBlue};
        font-weight: 600;
        font-size: 12px;
    }

    & > div:nth-of-type(2) {
        display: flex;
        gap: 10px;
        color: ${({ theme }) => theme.colors.darkGrayishBlue};
        font-weight: 700;
        font-size: 13px;
        letter-spacing: -.1px;
    }

    & button {
        background: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
        letter-spacing: inherit;
        border: none;
        cursor: pointer;
        transition: color .2s ease;

        &:hover,
        &.active {
            color: ${({ theme }) => theme.primary.brightBlue};
        }
    }
`;