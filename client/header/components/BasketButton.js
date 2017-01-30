import React, { PropTypes } from 'React';

if (process.env.BROWSER ) {
    require ("../style/header.scss");
}

export default class BasketButton extends React.Component {
    render(){
        return (
            <a href="#" className="basketButton">
                <div className="basketButton-content">
                    <img height={28} width={30} src="/images/basket.png"/>
                    <span className="basketCount">{this.props.items}</span>
                    <br/>
                    <span className="basketText">Basket</span>
                </div>
            </a>
        )
    }
}

BasketButton.propTypes = {
    items: PropTypes.number.isRequired
};