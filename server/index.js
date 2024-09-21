const express = require("express");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/users");
const courseRouter = require("./routes/course");

const app = express();

app.get("/", function (req, res) {
  res.send("I'm Working!");
});

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});