const express = require('express');
const {connectMongoDb} = require("./connection"); 
const userRouter = require('./routes/user');
const { logReqRes } = require("./middlewares");


const app = express();
const PORT = 8000;

// Connection
connectMongoDb('mongodb://127.0.0.1:27017/Nodejs-tutorial');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));


// Routes
app.use('/api/users',userRouter);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

