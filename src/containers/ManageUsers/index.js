'use strict';

import ReactDOM from 'react-dom';
import React from 'react';
import MyApp from './myApp';
// is there a better way of doing this?
import './ag-grid.css';
import './theme-material.css';

// waiting for dom to load before booting react. we could alternatively
// put the index.js reference at the end fo the index.html, but i prefer this way.
document.addEventListener('DOMContentLoaded', ()=> {
    var container = document.getElementById('myAppContainer');
    ReactDOM.render(
        React.createElement(MyApp),
        container
    );
});
