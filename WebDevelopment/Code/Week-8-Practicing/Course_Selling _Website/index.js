const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
app.use(express.json());

// Routers
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/courses");
const { adminRouter } = require("./routes/admin");

// Fallbacks for environment variables
const MONGO_URL = process.env.MongoURL || process.env.MONGO_LOCAL_URL;
const PORT = process.env.PORT || 3000;

// Print URLs for debugging
console.log("MongoDB URL:", MONGO_URL);
console.log("Port:", PORT);

// Route declarations
app.use('/', userRouter);
app.use('/', courseRouter);
app.use('/', adminRouter);

// Database and server initialization
async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Mongoose is connected.");

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error while connecting to the database:", error.message);
    }
}

main();