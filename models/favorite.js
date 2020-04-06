const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    campsites: [{
        type: monsgoose.Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
});

const Favorite = mongoose.model('Favorite', favoritSchema);
module.exprots = Favorite;