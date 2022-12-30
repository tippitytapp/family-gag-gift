const router = require("express").Router();
const mids = require("../data/middleware")

router.get("/list/all", (req, res)=>{
    return mids.getAll().then(resp => res.status(200).json(resp)) 
})

router.get("/:name", (req, res)=>{
    if(req.params.name){
        return mids.getByName(req.params.name).then(resp => res.status(200).json(resp)).catch(err=>res.status(404).json(err))
    }
})

module.exports = router