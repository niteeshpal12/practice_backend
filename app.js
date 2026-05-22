import taskRoute from'./task.route.js';

import express from 'express';
const app=express();

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('server is running');
});
app.use('/api/v1',taskRoute);
const PORT=5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);

})
