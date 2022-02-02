import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { PlayerCreation } from './components/PlayerCreation';



function makePlayerCreationPage() {
    
    const appElement = document.getElementById('app');
    unmountComponentAtNode(appElement);
    ReactDOM.render(<PlayerCreation />, appElement);
    
    
}




export {makePlayerCreationPage}