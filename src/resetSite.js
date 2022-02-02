import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { App } from './App';
import { createHomePage } from './loadPlayers';


function resetSite() {
    
    const appElement = document.getElementById('app');
    unmountComponentAtNode(appElement);
    ReactDOM.render(<App />, appElement);

    createHomePage();
}

export {resetSite}