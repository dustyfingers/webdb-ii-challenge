const db = require("./data/dbConfig.js");

module.exports = {
    get,
    getByVin,
    insert
};

function get() {
    return db("carInventory");
}

function getByVin(vin) {
    return db("carInventory")
        .where({ vin })
        .first();
}

function insert(account) {
    return db("carInventory")
        .insert(account)
        .then(vins => getByVin(vins[0]));
}
