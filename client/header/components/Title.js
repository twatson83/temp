import React, { PropTypes } from 'React';

if (process.env.BROWSER ) {
    require ("../style/header.scss");
}

export default class Title extends React.Component {
    render(){
        return (<span className="header-title">My Store</span> )
    }
}