
import { makePlayerCreationPage } from "./makePlayerCreationPage";
import { resetSite } from "./resetSite";


function createPlayer(){

    function addPlayer() {
        const buttonForAddingPlayer = document.querySelector('.addPlayer');
        buttonForAddingPlayer.addEventListener('click', () => {
            makePlayerCreationPage();
            createBackButton();
            playerCreationPageSubmit();
        });

        function playerCreationPageSubmit() {
            const playerCreationSite = document.querySelector('.playerCreationSite');
            const submitButton = document.createElement("button");
            submitButton.textContent = "Submit";
            const pName = document.getElementById("name");
            const pCountry = document.getElementById("country");
            const pNickname = document.getElementById("nickname");
            const pEarnings = document.getElementById("earnings");
            const pPhoto = document.getElementById("photo");
            const cPhoto = document.getElementById("countryFlag");
        
            submitButton.addEventListener('click', () => {
                console.log("This is the name of the player " + " " + pName.value);
                console.log("This is the Country of the player " + " " + pCountry.value);
                console.log("This is the Nickname of the player " + " " + pNickname.value);
                console.log("These are the earnings of the player " + " " + pEarnings.value);
                console.log("This is the country photo url of the player " + " " + cPhoto.value);
                console.log("This is the photo url of the player " + " " + pPhoto.value);
               
            });
            playerCreationSite.appendChild(submitButton);
        }


        

        function createBackButton() {
            const playerCreationSite = document.querySelector('.playerCreationSite');
            const backButton = document.createElement('button');
            backButton.textContent = "Back";

            backButton.addEventListener('click', () => {
                resetSite();
            });

            playerCreationSite.appendChild(backButton);
        }
    }

    addPlayer();
}

export {createPlayer};