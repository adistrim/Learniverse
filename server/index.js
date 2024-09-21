const express = require("express");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/users");
const courseRouter = require("./routes/course");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

app.get("/", function (req, res) {
    res.send("I'm Working");
});

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected");
        return true;
    } catch (error) {
        console.log("Error connecting to database: ", error.message);
        return false;
    }
}

async function main() {
    const isConnected = await connectDB();
    if (isConnected) {
        app.listen(3000, function () {
            console.log("Server is running on port 3000");
        });
    } else {
        console.log("Server failed to start due to database connection error");
        process.exit(1);
    }
}

main();
