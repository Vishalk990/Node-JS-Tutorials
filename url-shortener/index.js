const express = require("express");
const { connectToMongoDb } = require("./connect");
const URL = require("./models/url");
const path = require("path");
const staticRoute = require("./routes/staticRouter");
const urlRoute = require("./routes/url");

const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://127.0.0.1:27017/short-url")
    .then(() => {
        console.log(`Connected to MongoDB`);
    }).catch((err) => {
        console.log(err);
    });;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlRoute);
app.use("/", staticRoute);




// app.get("/test", async (req, res) => {
//     const allUrls = await URL.find({});
//     return res.render('home', {
//         urls: allUrls,
//     });
// });


app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    });

    res.redirect(entry?.redirectURL);
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
