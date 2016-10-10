import React from "react";
import {render} from "react-dom";
import {App} from "./app";

require('../styles/main.less');

const items = [
    {
        name: 'Car',
        price: 7000,
        tags: ['[Free shipping]']
    },
    {
        name: 'Boat',
        price: 3000,
        tags: ['[Free shipping]', '[Receive in packstation]']
    },
    {
        name: 'Bike',
        price: 1000,
        tags: ['[Receive in packstation]']
    }
];

render(<App items={items}/>, document.querySelector('#main'));
