const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async(req,res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
     res.send('Error ' + err)
 }
})

router.get('/:id', async(req,res) => {
    try{
           const user = await User.findById(req.params.id)
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const user = new User({
        task: req.body.task,
        completed: req.body.completed,
    })

    try{
        const a1 =  await user.save()  
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.put("/:id", async (req, res) => {
    try {
        const user = await user.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(user);
    } catch (error) {
        res.send('Error');
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        
        res.json(user);
    } catch (error) {
        res.send('Error');
    }
});

module.exports = router