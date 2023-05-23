const mongoose = require("mongoose");

const connectionString =
    "mongodb+srv://84grod:<password>@nodeexpressprojects.w2xux5q.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = () => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;