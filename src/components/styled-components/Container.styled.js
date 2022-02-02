import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    width: 100%;
    height: 1000px;
    max-width:100%;
    margin: 0;
    
`

export const PlayerContainer = styled.div`
    align-self: center;
    width: 80%;
    
    height: 700px;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 9%;
`

export const LoadMoreButton = styled.button`
    align-self: center;
    width: 20%;
    border: none;
    background-color: green;
    color: white;
`