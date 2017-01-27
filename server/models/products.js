import connect from "./mongodb";

export function find(query, page, pageSize) {
    return new Promise(function(resolve, reject){
        connect().then(function(db){
            let findOptions = {};

            let cursor;
            if (query !== undefined && query !== null && query !== ""){
                let queryRegex = new RegExp(query, "ig");
                findOptions.$or = [{
                    "Name": queryRegex,
                    "Tags": queryRegex
                }];
                cursor = db.collection("Services").find(findOptions).skip(page * pageSize).limit(pageSize + 1);
            } else {
                cursor = db.collection("Services").skip(page * pageSize).limit(pageSize + 1);
            }

            resolve(cursor.toArray());
        }).catch(reject);
    });
}
