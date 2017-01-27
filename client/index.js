import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './home/components/HomePage';

if (process.env.BROWSER ) {
    require ("../shared/style/fonts.scss");
}

ReactDOM.render(
    <HomePage />,
    document.getElementById('root')
);