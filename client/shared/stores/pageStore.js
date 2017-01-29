import appDispatcher from '../../dispatcher';
import BaseStore from './BaseStore';

let page = "";

class PageStore extends BaseStore {
    constructor(){
        super();
    }

    getPage(){
        return page;
    }
}

const pageStore = new PageStore();

appDispatcher.register(payload => {
    const type = payload.type;
    switch (type){
        case "CHANGE":
            page = payload.page;
            break;
        default:
            return true;
    }

    pageStore.emitChange();

    return true;
});

export default pageStore;
