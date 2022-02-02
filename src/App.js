import React from 'react';
import { Container, PlayerContainer, LoadMoreButton } from './components/styled-components/Container.styled';
import { HeaderContainer, SearchInput, Home, AddPlayerButton, SearchButton } from './components/styled-components/Header.styled';

export function App() {
    return (
        <div className='pageContainer'>
            <HeaderContainer className='header-container'>
                <Home className='home'>Home</Home>
                <SearchInput placeholder='Search player' className='search-input'></SearchInput>
                <SearchButton className='searchButton'>Search</SearchButton>
                <AddPlayerButton className='addPlayer'>Add player</AddPlayerButton>
            </HeaderContainer>
            <div className='currentPageContainer'>
                <Container className='homePage'>
                    <PlayerContainer className='pContainer'> 
                    </PlayerContainer>
                    <LoadMoreButton className="load-more">Load More</LoadMoreButton>
                </Container>
            </div>
        </div>
     );
}