const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.mongoURI;

// const mongoURI = 'mongodb://zainsatti1901:mern123@ac-0byfai7-shard-00-00.ygf12er.mongodb.net:27017,ac-0byfai7-shard-00-01.ygf12er.mongodb.net:27017,ac-0byfai7-shard-00-02.ygf12er.mongodb.net:27017/?GoFoodssl=true&replicaSet=atlas-2jwtmg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected Successfully");

        const food_items_fetched = mongoose.connection.db.collection("food_items");
        const food_items_data = await food_items_fetched.find({}).toArray();
        // {} empty brackets: as we want all data present in food_items collection
        global.food_items = food_items_data;

        const food_category_fetched = mongoose.connection.db.collection("food_Category");
        const food_category_data = await food_category_fetched.find({}).toArray();
        // {} empty brackets: as we want all data present in food_items collection
        global.food_category = food_category_data;

        
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = mongoDB;
