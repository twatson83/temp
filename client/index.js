import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/components/App';

if (process.env.BROWSER ) {
    require ("./shared/style/fonts.scss");
    require ("./shared/style/base.scss")
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);