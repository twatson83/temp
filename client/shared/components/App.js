import React, {PropTypes} from "React";
import Header from './Header.js';
import Navigation from './Navigation.js';
import accountStore from '../../account/store'
import pageStore from '../stores/pageStore';

if (process.env.BROWSER ) {
    require ("../style/app.scss");
}

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            accountDetails: accountStore.getAccountDetails(),
            selectedPage: pageStore.getPage()
        };

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount(){
        accountStore.addChangeListener(this._onChange);
        pageStore.addChangeListener(this._onChange);
    }

    componentWillUnmount(){
        accountStore.removeChangeListener(this._onChange);
        pageStore.removeChangeListener(this._onChange);
    }

    render(){
        return (
            <div className="app">
                <Header accountDetails={this.state.accountDetails} />
                <Navigation selectedPage={this.state.selectedPage}/>
                <div className="body">
                    {this.children}
                </div>
            </div>
        )
    }

    _onChange(){
        this.setState({
            accountDetails: accountStore.getAccountDetails(),
            selectedPage: pageStore.getPage()
        });
    }
}
