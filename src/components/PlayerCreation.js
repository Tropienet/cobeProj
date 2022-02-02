import React from 'react';
import { HeaderContainer, SearchInput, Home, AddPlayerButton } from './styled-components/Header.styled';
import { PlayerCreationSite } from './styled-components/PlayerCreation.styled';



export function PlayerCreation() {
    return (
        <div className='pageContainer'>
             <HeaderContainer>
                <Home className='home'>Home</Home>
                <SearchInput placeholder='Search player'></SearchInput>
                <AddPlayerButton className='addPlayer'>Add player</AddPlayerButton>
            </HeaderContainer>
            <div className='currentPageContainer'>
                <PlayerCreationSite className='playerCreationSite'>
                    <form>
                        <label htmlFor='name'>Name
                            <br></br>
                            <input type="text" id='name'></input>
                        </label>
                        <br></br>
                        <label htmlFor='country'>Country
                            <br></br>
                            <input type='text' id='country'></input>
                        </label>
                        <br></br>
                        <label htmlFor='countryFlag'>Country flag
                            <br></br>    
                            <input type='file' id='countryFlag'></input>
                        </label>
                        <br></br>
                        <label htmlFor='photo'>Photo
                            <br></br>
                            <input type='file' id='photo'></input>
                        </label>
                        <br></br>
                        <label htmlFor='nickname'>Nickname
                            <br></br>
                            <input type='text' id='nickname'></input>
                        </label>
                        <br></br>
                        <label htmlFor='earnings'>Earnings
                            <br></br>
                            <input type='text' id='earnings'></input>
                        </label>
                        <br></br>

                    </form>

                </PlayerCreationSite>
            </div>
        </div>
    )
}



