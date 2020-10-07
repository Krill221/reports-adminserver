const { model, Schema } = require('mongoose');

const ObjectSchema = new Schema({
    bld: String,
    brand: String,
    responsible: String,
    objecttype: String,
    dataprocess: String,
    datatype: String,
    objectnumber: String,
    status: String,
    questionarydata: String,
    connectdata: String,
    closedata: String,
    tel: String,
    email: String,
    lastaction: String,
    mallcomment: String,
    

    createdAt: String,
    updatedAt: String,
});

module.exports = model('Object', ObjectSchema);