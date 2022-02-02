
import { makePlayerCreationPage } from "./makePlayerCreationPage";
import { resetSite } from "./resetSite";


function createPlayer(){

    function addPlayer() {
        const buttonForAddingPlayer = document.querySelector('.addPlayer');
        buttonForAddingPlayer.addEventListener('click', () => {
            makePlayerCreationPage();
            createBackButton();
        });


        

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