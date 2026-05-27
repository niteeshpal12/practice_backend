import {Router} from 'express';

 import{getAllTasks,getSingleTask,createTask,deleteTask,updateTask} from '../controllers/task.controllers.js';
const router=Router();
const tasks=[];


router.post('/tasks',createTask)

 
router.get('/tasks',getAllTasks);
router.get('/tasks/:id',getSingleTask);
router.delete('/tasks/:id',deleteTask);
router.put('/tasks/:id',updateTask);

 


 

 

 

export default router;