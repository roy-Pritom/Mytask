const mongoose = require("mongoose");
const DB_URI="mongodb+srv://Ecommerce-api:KSuFJzWiamgZLOfP@cluster0.ow3zltf.mongodb.net/?retryWrites=true&w=majority";
const connectDatabase = () => {
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
