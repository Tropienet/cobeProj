import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { App } from './App';

function searchPlayer() {
    const searchButton = document.querySelector('.searchButton');
    const searchInput = document.querySelector('.search-input');

    function createSearchButton(){
        searchButton.addEventListener('click', () => {
            let player = searchInput.value;
            searchForSpecificPlayer(player);
            resetSite();
        })
    }

    function resetSite() {
    
        const appElement = document.getElementById('app');
        unmountComponentAtNode(appElement);
        ReactDOM.render(<App />, appElement);
    }

    function searchForSpecificPlayer(player) {
        let contentful = require('contentful');

        let client = contentful.createClient({
            space: 'ojpqlra32uom',
            accessToken: 'wO9AhZ3Ig3-aFGAJ3SEj1vtKJ6DuYhvnwDHTJfsQX5w',
        });

        client.getEntries().then(function (entries) {
            entries.items.forEach(function (entry) {
                if(entry.fields.name==player){
                    createPlayerCard(entry);
                }
            });
        });
    }

    function createPlayerCard(entry){

        const container = document.querySelector('.pContainer');
        const playerCardContainer = document.createElement('div');
        playerCardContainer.style.display = "flex";
        playerCardContainer.style.flexDirection = "column";
        playerCardContainer.style.height = "350px";
        playerCardContainer.style.width = "350px";
        playerCardContainer.style.border = "1px solid black"
        playerCardContainer.style.background = "#818285";

        const playerImageContainer = document.createElement('div');
        playerImageContainer.style.height = "250px";
        playerImageContainer.style.width = "350px";
        const playerImage = document.createElement('img');
        playerImage.setAttribute('src', entry.fields.photo.fields.file.url);
        playerImage.style.height = 'auto';
        playerImage.style.width = 'auto';
        playerImage.style.maxHeight = '350px';
        playerImage.style.maxWidth = '350px';
        playerImageContainer.appendChild(playerImage);
        playerCardContainer.appendChild(playerImageContainer);

        
        const playerCountryAndText = document.createElement('div');
        playerCountryAndText.style.display = "flex";
        playerCountryAndText.style.width = "350px";
        playerCountryAndText.style.height = "100px";
        playerCountryAndText.style.background = "#4E5154"
        

        const playerCountry = document.createElement('div');
        playerCountry.style.display = "flex";
        playerCountry.style.justifyContent ="center";
        playerCountry.style.width = "120px";
        const playerCountryImage = document.createElement('img');
        playerCountryImage.setAttribute('src', entry.fields.countryFlag.fields.file.url);
        playerCountryImage.style.height = "auto";
        playerCountryImage.style.width = "auto";
        playerCountryImage.style.maxHeight = "100px";
        playerCountryImage.style.maxWidth = "120px";
        playerCountryImage.style.alignSelf = "center";
        playerCountryImage.style.borderRadius = "50%";
        playerCountry.appendChild(playerCountryImage);
        playerCountryAndText.appendChild(playerCountry);

        const playerName = document.createElement('div');
        playerName.style.display = "flex";
        playerName.style.flexDirection = "column";
        playerName.style.justifyContent = "center";
        playerName.style.width = "230px";
        const playerNamePara = document.createElement('p');
        playerNamePara.textContent = entry.fields.name;
        playerNamePara.style.alignSelf = "center";
        playerNamePara.style.color = "white";
        playerName.appendChild(playerNamePara);
        const playerPosition = document.createElement('p');
        playerPosition.textContent = entry.fields.position;
        playerPosition.style.color = "white";
        playerPosition.style.alignSelf = "center";
        playerName.appendChild(playerPosition);
        playerCountryAndText.appendChild(playerName);

        playerCardContainer.appendChild(playerCountryAndText);

        container.appendChild(playerCardContainer);
    }

    

    createSearchButton();
}

export {searchPlayer};