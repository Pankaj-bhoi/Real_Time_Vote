const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require("passport");
const users = require("./routes/api/users");
const db = require("./config/keys").mongoURI;

mongoose.connect(db,{ useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Initialization for Pasaport
app.use(passport.initialize());
// Config for Password
require("./config/passport")(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use("/api/users", users);
const Port = 4000 
app.listen(Port,()=>{
    console.log(`Server started ${Port}`);
})
