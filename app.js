const express = require("express");
const logger = require("morgan");
const cors = require("cors");


const app = express();

const ErrorMessageHandlerClass = require("./routes/utils/ErrorMessageHandlerClass");
const errorController = require("./routes/utils/errorController");
const userRouter = require("./routes/user/userRouter");
const pedRouter = require("./routes/ped/pedRouter")
const vehicleRouter = require("./routes/vehicle/vehicleRouter")
const officerRouter = require("./routes/officer/officerRouter")
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}





app.use(express.json());
//parsing form data/incoming data
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", userRouter);
app.use("/api/ped", pedRouter)
app.use("/api/vehicle", vehicleRouter)
app.use("/api/officer",officerRouter )


app.all("*", function (req, res, next) {
  next(
    new ErrorMessageHandlerClass(
      `Cannot find ${req.originalUrl} on this server! Check your URL`,
      404
    )
  );
});

app.use(errorController);

module.exports = app;
