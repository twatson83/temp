import { MongoClient } from 'mongodb';

let db = null;
let connect = function() {
    return db || MongoClient.connect("mongodb://lonappdev04/SampleApp");
};

export default connect;
