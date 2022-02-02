require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createHomePage } from './loadPlayers';
import { createPlayer } from './addPlayer';


const appElement = document.getElementById('app');

ReactDOM.render(<App />, appElement);


createHomePage();
createPlayer();
