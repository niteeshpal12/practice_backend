 import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import taskRoute from "./routes/tasks.route.js";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
 
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('server is running');
});
app.use('/api/v1',taskRoute);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);

})



