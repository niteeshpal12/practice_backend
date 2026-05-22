import {Router} from 'express';
const router=Router();
const tasks=[];


router.post('/tasks',(req,res)=>{
    const{title}=req.body;
    if(!title){
        res.send('title is required');
    }
    const newTask={
        id:Date.now(),
        title,
    }
    tasks.push(newTask);
    res.status(201)
    .json({
        success:true,
        message:'task created successfully',
        data:newTask
    })
})

router.get('/tasks',(req,res)=>{
    res.json({
        success:true,
        message:'tasks retrieved successfully',
        data:tasks,
    })
})


router.post('/tasks/:id',(req,res)=>{
    const {id}=req.params;
    const{title}=req.body;
    const task=tasks.find((t)=>t.id===Number(id));
    if(!task){
        res.status(404)
        .json({
            success:false,
            message:'task not found',
        })

    }
    task.title=title;
    res.json({
        success:true,
        message:'task updated successfully',
        data:task,
    })
})

export default router;