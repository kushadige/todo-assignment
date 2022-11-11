import styled from "styled-components";

export const StyledDiv = styled.div`
    padding: 20px 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.veryLightGray};
    transition: background-color .3s ease;

    &::before {
        position: absolute;
        content: '';
        background: ${({ themeActive }) => themeActive === 'LIGHT' ? 'url("/bg-desktop-light.jpg")' : 'url("/bg-desktop-dark.jpg")'} no-repeat center center/cover;
        object-fit: cover;
        width: 100%;
        height: 250px;
        top: 0;
        left: 0;
        z-index: 1;
    }
`;

export const Card = styled.div`
    max-width: 600px;
    width: 100%;
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -100px);
    padding: 20px;

    & > * {
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > h1 {
        text-transform: uppercase;
        letter-spacing: .7rem;
        font-size: 2rem;
        color: white;
    }
    & > button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;