const route=require('express').Router()

let todo=[

    {task:"T1",done:"yes"},
    {task:"T2",done:"no"},
    {task:"T3",done:"yes"}

]

route.get('/:id',(req,res)=>res.send(todo[req.params.id])) //workd

route.delete('/:id',(req,res)=>{
    delete todo[req.params.id]
    res.send(todo)
   // todo.splice(req.params.id)
})

route.post('/',(req,res)=>{
    
    todo.push({
        task:req.body.task,
        done:req.body.done
    })
    res.send(todo)
    //res.send('got a post request')
    
})
route.patch('/:id/', (req, res) => {
    {
        todo[req.params.id].task = req.body.task,
            todo[req.params.id].done = req.body.done;
    }
    res.send(todo);
});

route.get('/',(req,res)=>res.send(todo))

module.exports=route


