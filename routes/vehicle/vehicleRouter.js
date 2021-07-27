
const express = require("express")
const Vehicle = require("./model/Vehicle")
const router = express.Router()



router.get("/get-by-plate", (req, res)=>{
    Ped.find(req.query)
        .then(
            result=>{
                res.json(result)
                
            }
        ).catch(
            error =>{
                console.log(error)
            }
        )
    console.log(req.query)
    
    
})
// router.get("/get-by-name", getPedByFirstName)



module.exports= router