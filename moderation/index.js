const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const { default: axios } = require("axios");
const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";
    console.log(status);
    await axios.post("http://localhost:4005/events", {
      type: "CommentModerate",
      data: {
        id: data.id,
        content: data.content,
        postId: data.postId,
        status,
      },
    });
  }
  res.send({});
});

app.listen(4003, () => {
  console.log("Listening port 4003: events..");
});
