import React, { PropTyoes } from 'react';

if (process.env.BROWSER ) {
    require ("../style/home.scss");
}

export default class HomePage extends React.PureComponent {
    render(){
        return (
            <h1>Home Page</h1>
        )
    }
}