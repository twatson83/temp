import React, { PropTypes } from 'React';

if (process.env.BROWSER ) {
    require ("../style/navigation.scss");
}

export default class Header extends React.Component {
    render(){
        return (<div className="navigation"></div>)
    }
}