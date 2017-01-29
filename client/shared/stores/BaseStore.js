import EventEmitter from 'events';

export default class BaseStore extends EventEmitter {
    constructor(){
        super();
    }

    addChangeListener (callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    emitChange() {
        this.emit('change');
    }

}