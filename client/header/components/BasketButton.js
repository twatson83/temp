import React, { PropTypes } from 'React';

if (process.env.BROWSER ) {
    require ("../style/header.scss");
}

export default class BasketButton extends React.Component {
    render(){
        return (
            <a href="#" className="basketButton">
                <img src="/images/cartIcon.png"/>
                <span className="basketCount">{this.props.items}</span>
                <span className="basketText">Basket</span>
            </a>
        )
    }
}

BasketButton.propTypes = {
    items: PropTypes.number.isRequired
};