const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const Data = require("./data");
const logger = require("morgan");
const Api_port = 3002;
const app = express();
app.use(cors());
const corsOptions = {
  origin: true,
  credentials: true,
};
app.options("*", cors(corsOptions));
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.post("/measure", (req, res) => {
  const { text } = req.body;

  if (text) {
    return res.json({
      success: {
        total: 1,
      },
      contents: {
        translation: "ferblatin",
        text: "Hello world",
        translated: "helio worldy",
      },
    });
  }
});

app.use("/api", router);
app.listen(Api_port, () => console.log(`LISTENING ON PORT ${Api_port}`));
