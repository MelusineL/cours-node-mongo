const Dog = require('../models/dog.model.js');

exports.getDogs = async function() {
    try {
        const dogs = Dog.find({});
        return dogs;
    }
    catch(e) {
        console.log(e);
    }
}