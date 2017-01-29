import React, { PropTypes } from 'React';

if (process.env.BROWSER ) {
    require ("../style/header.scss");
}

export default class Header extends React.Component {
    render(){
        return (<header className="header"></header>)
    }
}