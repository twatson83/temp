import React, { PropTypes } from 'React';
import Title from './Title';
import AccountDropDown from './AccountDropDown';
import BasketButton from './BasketButton';

if (process.env.BROWSER ) {
    require ("../style/header.scss");
}

export default class Header extends React.Component {
    render(){
        return (
            <header className="header">
                <Title />

                <BasketButton items={this.props.accountDetails.basket} />
                <AccountDropDown accountDetails={this.props.accountDetails} />
            </header>
        )
    }
}

Header.propTypes = {
    accountDetails: PropTypes.shape({
        basket: PropTypes.number.isRequired,
        signedIn: PropTypes.bool.isRequired,
        username: PropTypes.string
    }).isRequired
};
