import appDispatcher from '../dispatcher';
import BaseStore from '../shared/stores/BaseStore';

let userDetails = {
    signedIn: false,
    basket: 0,
    products: {},
    username: null
};

class AccountStore extends BaseStore {
    constructor(){
        super();
    }

    getAccountDetails(){
        return userDetails;
    }
}

const accountStore = new AccountStore();

appDispatcher.register(payload => {
    const type = payload.type;
    switch (type){
        case "SIGN-IN":
            userDetails = {
                signedIn: true,
                basket: payload.products.length,
                products: payload.products,
                username: payload.username
            };
            break;
        case "SIGN-OUT":
            userDetails = {
                signedIn: false,
                basket: 0,
                products: [],
                username: null
            };
            break;
        default:
            return true;
    }

    accountStore.emitChange();

    return true;
});

export default accountStore;