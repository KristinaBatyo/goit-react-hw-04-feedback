import styled from '@emotion/styled';

export const ButtonStyled = styled.button `

    width: 100px;
    height: 40px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: #fff;
        color: #000;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
`
export const ButtonDiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    
`
