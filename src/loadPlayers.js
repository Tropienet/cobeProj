import { resetSite } from './resetSite';
import { createPlayer } from './addPlayer';
import { searchPlayer } from './searchPlayer';
export {createHomePage};


function createHomePage() {

    let count = 0;

    function createPlayercard() {
        const contentful = require('contentful');

        let client = contentful.createClient({
            space: 'ojpqlra32uom',
            accessToken: 'wO9AhZ3Ig3-aFGAJ3SEj1vtKJ6DuYhvnwDHTJfsQX5w',
        });
        count += 6;
        


        const container = document.querySelector('.pContainer');
        

        client.getEntries().then(function (entries) {
            loadMore(entries);
            entries.items.forEach(function (entry) {
                if(entry.fields.id<=6){
                    const playerCard = document.createElement('div');
                    playerCard.setAttribute('class', `${entry.fields.nickname} ${entry.fields.id}`);

                    if(entry.fields.id==1){
                        playerCard.addEventListener('click', () => {
                            createDescriptionPage(entry);
                        });   
                    }else{
                        playerCard.addEventListener('click', () => {
                            console.log("error");
                        });
                    }
                    
                    setPlayerCardStyle(playerCard);
                    addImageToCard(`${entry.fields.photo.fields.file.url}`, playerCard);
                    addCountryNamePosition(playerCard, entry);
                    
                    
                container.appendChild(playerCard);
                }
            });
        });
    }

    function addImageToCard(url, playerCard) {
        const playerImage = document.createElement('img');
        playerImage.setAttribute('src', `${url}`);
        playerImage.style.height = 'auto';
        playerImage.style.width = 'auto';
        playerImage.style.maxHeight = '150px';
        playerImage.style.maxWidth = '250px';
        playerCard.appendChild(playerImage);
    }

    function setPlayerCardStyle(playerCard){
        playerCard.style.height = '250px'
        playerCard.style.width = '250px';
        playerCard.style.display = "flex";
        playerCard.style.flexDirection = "column";
        playerCard.style.border = "1px solid black"
        playerCard.style.background = "#818285";
    }

    function addCountryNamePosition(playerCard, entry) {
        const playerCountryAndText = document.createElement('div');
        playerCountryAndText.style.display = "flex";
        playerCountryAndText.style.width = "250px";
        playerCountryAndText.style.height = "100px";
        playerCountryAndText.style.background = "#4E5154"
        

        const playerCountry = document.createElement('div');
        playerCountry.style.display = "flex";
        playerCountry.style.justifyContent ="center";
        playerCountry.style.width = "80px";
        const playerCountryImage = document.createElement('img');
        playerCountryImage.setAttribute('src', entry.fields.countryFlag.fields.file.url);
        playerCountryImage.style.height = "auto";
        playerCountryImage.style.width = "auto";
        playerCountryImage.style.maxHeight = "100px";
        playerCountryImage.style.maxWidth = "80px";
        playerCountryImage.style.alignSelf = "center";
        playerCountryImage.style.borderRadius = "50%";
        playerCountry.appendChild(playerCountryImage);
        playerCountryAndText.appendChild(playerCountry);

        const playerName = document.createElement('div');
        playerName.style.display = "flex";
        playerName.style.flexDirection = "column";
        playerName.style.justifyContent = "center";
        playerName.style.width = "170px";
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

        playerCard.appendChild(playerCountryAndText);

    }

  

    function createDescriptionPage(entry){
        deleteHomePage();
        addDescriptionInformation(entry);
        
    }

    function deleteHomePage() {
        const homePageContainer = document.querySelector('.homePage');
        homePageContainer.remove();
    }

    function addDescriptionInformation(entry){
        const currentPageContainer = document.querySelector('.currentPageContainer');
        const playerDescriptionPage = document.createElement('div');
        playerDescriptionPage.setAttribute('class', 'descriptionPage');

        const playerName = document.createElement('p');
        playerName.setAttribute('class', 'playerName');
        playerName.textContent = entry.fields.name;
        playerDescriptionPage.appendChild(playerName);

        const playerDescription = document.createElement('p');
        playerDescription.setAttribute('class', 'playerDescription');
        playerDescription.textContent = entry.fields.description.content[0].content[1].value;
        playerDescriptionPage.appendChild(playerDescription);

        createBackButton(playerDescriptionPage);

        currentPageContainer.appendChild(playerDescriptionPage);
        
    }

    function createBackButton(playerDescriptionPage) {
        const backButton = document.createElement('button');
        backButton.textContent = "Back";

        backButton.addEventListener('click', () => {
           resetSite() 
        });

        playerDescriptionPage.appendChild(backButton);
    }

    function loadMore(entries){
        const container = document.querySelector('.pContainer');
        const loadMoreButton = document.querySelector('.load-more');
        
        loadMoreButton.addEventListener('click', () => {
            entries.items.forEach(function (entry) {
                if (entry.fields.id>count&&entry.fields.id<count+6){
                    const playerCard = document.createElement('div');
                    playerCard.setAttribute('class', `${entry.fields.nickname} ${entry.fields.id}`);
                    setPlayerCardStyle(playerCard);
                    addImageToCard(`${entry.fields.photo.fields.file.url}`, playerCard);
                    addCountryNamePosition(playerCard, entry);
                    
                    
                    container.appendChild(playerCard);
                }
            });
            count += 6;
            loadMoreButton.remove(); 
        });
        
    }
    
    createPlayercard();
    createPlayer();
    searchPlayer();
}

    




