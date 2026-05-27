export const tasks=[];



export const createTask=(req,res)=>{
    const{title}=req.body;
    if(!title){
        res.status(400).json({
            message:'title is required',
            success:false,
        })
        const newTask={
            id:Date.now(),
            title,
        }
        tasks.push(newTask);
        res.status(201).json({
            success:true,
            message:'task created successfully'
        })
    }
}

export const getAllTasks=(req,res)=>{
    res.json({
        success:true,
        count:task.length,
        data:tasks,
    })

}

export const getSingleTask=(req,res)=>{
    const{id}=req.params;
    const task=tasks.find((t)=>t.id===Number(id));
    if(!task){
        res.status(404).json({
            success:false,
            message:"task not found",
        })
    }
    res.status(200).json({
        message:'task retrieved successfully',
        success:true,
        data:task
    })

}

export const deleteTask=(req,res)=>{
    const {id}=req.params;
    const taskIndex=tasks.findIndex((t)=>t.id===Number(id));
    if(taskIndex===-1){
        res.status(404).json({
            success:false,
            message:'task not found',
        })
    }
    const deletedTask=tasks.splice(taskIndex,1)[0];
    res.status(200).json({
        success:true,
        message:'task deleted successfully',
        data:deletedTask,
    })
}


export const updateTask=(req,res)=>{
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
}





