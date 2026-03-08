const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const multer = require("multer");
const path = require("path")



app.use(cors());

dotenv.config();
mongoose.connect(process.env.MONGO_URL , {useNewUrlParser:true}).then(()=>{
    console.log("connected to MONGO db");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/images",express.static(path.join(__dirname,"public/images")));

//Middleware
app.use(express.json()); //it is a body parser
app.use(helmet());// used as a helmet for protection
app.use(morgan("common")); // show the information about response and request
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images");
    },
    filename:(req,file,cb)=>{
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        // const fileExtension = path.extname(file.originalname);
        
        cb(null,file.originalname);
    },

});
const upload = multer({storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    try{
        return res.status(200).json("File uploaded successfully.");
    }
    catch(err){
        console.log(err +"hello");
    }
})

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);



app.listen(8800 , ()=>{
    console.log("Backend server is running!")
})