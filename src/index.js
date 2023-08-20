// KISAC.LIVE V2 CLIENT
// Running on React 18
import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import "semantic-ui-css/semantic.min.css"; //Import for the Semantic UI
import * as serviceWorker from './serviceWorker';
const container = document.getElementById('root');

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


