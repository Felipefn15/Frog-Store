import styled from 'styled-components';
export const Wrapper = styled.main`
    background-color: #e5e9f2;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }
`;

export const Header = styled.div`
    background-color: #8190a5;
    display: flex;
    align-items: center;
    border-radius: 7px;
    height: 100px;
`;

export const Title = styled.button`
    display: flex;
    color: white;
    padding: 15px;
    padding-left: 30px;
    align-content: center;
    justify-content: left;
`;

export const Logo = styled.img``;

export const Filter = styled.div`
    display: flex;
    position: absolute;
    right: 0;

    h3 {
        padding-left: 20px;
        padding-right: 30px;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 1px;
    }

    @media only screen and (max-width: 600px) {
        display: block;
        position: relative;

        h3 {
            padding-left: 10px;
            padding-right: 0px;
            color: white;
            font-size: 13px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    @media only screen and (max-width: 600px) {
        padding-top: 10px;
    }
`;

export const Text = styled.h1`
    color: #47525e;
    font-size: 40px;
    padding: 18%;
    padding-bottom: 0px;
    padding-top: 1px;

    @media only screen and (max-width: 600px) {
        font-size: 25px;
    }
`;

export const Name = styled.label`
    color: #7090a0;
    font-style: italic;
`;

export const Scroll = styled.div`
    padding-bottom: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Table = styled.table`
    border: 1px solid #c8d2df;
    margin: 10%;
    margin-bottom: 0px;
    margin-top: 1px;

    @media only screen and (max-width: 600px) {
        font-size: 10px;
        margin-left: 0px;
        width: 100vw;
    }
`;

export const Head = styled.thead`
    justify-content: space-between;

    color: #5c5b5b;

    th {
        padding-top: 10px;
        padding-bottom: 10px;
    }
`;

export const Body = styled.tbody`
    text-align: center;
    background-color: white;
    color: gray;
    tr:hover {
        background-color: gray;
        color: white;
        cursor: pointer;
    }
    td {
        padding-bottom: 10px;
        padding-top: 10px;
        border-bottom: 1px solid #c8d2df;
        width: 30px;
    }
`;
