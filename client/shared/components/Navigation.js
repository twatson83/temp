import React, { PropTypes } from 'React';
import {  Link } from 'react-router';

if (process.env.BROWSER ) {
    require ("../style/navigation.scss");
}

export default class Navigation extends React.Component {
    render(){
        return (
            <div className="navigation">
                <Link to="/"  className={ this.props.selectedPage === "Deals" ? "selectedPage" : "" }>Top Deals</Link>
                <label>Products</label>
                <ul>
                    <li>
                        <Link to={"/books"}
                              className={ this.props.selectedPage === "Books" ? "selectedPage" : "" }>
                            Books
                        </Link>
                        <Link to={"/music"}
                              className={ this.props.selectedPage === "Music" ? "selectedPage" : "" }>
                            Music
                        </Link>
                        <Link to={"/movies"}
                              className={ this.props.selectedPage === "Movies" ? "selectedPage" : "" }>
                            Movies
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