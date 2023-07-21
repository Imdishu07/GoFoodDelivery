const mongoose = require('mongoose');
const { find } = require('./Models/Users');

const mongoURI =
  'mongodb+srv://dishantmahajan2002:root3@foodapp.h0oruvg.mongodb.net/Project3?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    const fetchedData = await mongoose.connection.db.collection('fooditems').find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection('foodcategory').find({}).toArray();

    global.foodItems = fetchedData;
    global.foodCategory = foodCategory;

    console.log('Data fetched and stored in global variables');
  } catch (error) {
    console.log('An error occurred while connecting to the database');
    console.error(error);
  }
};

module.exports = connectToMongoDB;


// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://dishantmahajan2002:root3@foodapp.h0oruvg.mongodb.net/Project3?retryWrites=true&w=majority';

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log("Connected");

//     const fetchedData = await mongoose.connection.db.collection("fooditems").find({}).toArray();
//       const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
//       global.fooditems = fetchedData;
//       global.foodCategory = foodCategory;
    
//     // console.log(fetchedData);
//     // global.fooditems = fetchedData;
//     // console.log(global.fooditems);


//     // mongoose.connection.close();
//     // console.log("Connection closed");
//   } catch (error) {
//     console.log("An error occurred while connecting to the database");
//     console.log("---", error);
//   }
// };

// module.exports = mongoDB;
