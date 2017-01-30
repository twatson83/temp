import React, { PropTypes } from 'React';
import { Link } from 'react-router'

if (process.env.BROWSER ) {
    require ("../style/header.scss");
}

export default class AccountDropDown extends React.Component {
    render(){
        return (
            <div className="accountDropDown">
                <a href="#" className="accountDropDown-button">
                    <div className="accountDropDown-hello">
                        {
                            this.props.accountDetails.signedIn ?
                                "Hello " + this.props.accountDetails.username :
                                "Hello. Sign in"
                        }
                    </div>

                    <div>
                        <div className="accountDropDown-yourAccount">
                            Your Account
                        </div>
                        <i className="caret fa fa-caret-down"></i>
                    </div>
                </a>
                <ul className="accountDropDown-menu">
                    {
                        !this.props.accountDetails.signedIn &&
                        <li>
                            <Link className="accountDropDown-signIn" to="/account/signin">Sign in</Link>
                        </li>
                    }
                    <li>
                        <Link className="accountDropDown-link yourAccount" to="/account/details">Your Account</Link>
                    </li>
                    <li>
                        <Link className="accountDropDown-link yourOrders" to="/account/orders">Your Orders</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

AccountDropDown.propTypes = {
    accountDetails: PropTypes.shape({
        basket: PropTypes.number.isRequired,
        signedIn: PropTypes.bool.isRequired,
        username: PropTypes.string
    }).isRequired
};