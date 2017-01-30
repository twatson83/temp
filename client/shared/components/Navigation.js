import React, { PropTypes } from 'React';
import {  Link } from 'react-router';

if (process.env.BROWSER ) {
    require ("../style/navigation.scss");
}

export default class Navigation extends React.Component {
    render(){
        return (
            <div className="navigation">
                <Link to="/"  className={ this.props.selectedPage === "Deals" ? "selectedPage" : "" }>Deals</Link>
                <ul>
                    <li>
                        <Link to={"/products"}
                              className={ this.props.selectedPage === "Products" ? "selectedPage" : "" }>
                            Products
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

Navigation.propTypes = {
    selectedPage: PropTypes.string.isRequired
};