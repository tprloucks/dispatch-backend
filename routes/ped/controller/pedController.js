const Ped = require("../model/Ped")

async function getAllPed(req, res){
    try {
        let foundAllPed = await Ped.find({}) 
        res.json({message:"success", payload:foundAllPed})
        
    } catch (e) {
        res.status(500).json({message:"failure", error:e.message})
    }
}

async function createPed(req, res){
    
    try {
        let createdPed = new Ped({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            address:req.body.address,
            warrants:req.body.warrants,
            wanted:req.body.wanted,
            license:req.body.license,
            DOB:req.body.DOB
            
        })
        let savedPed = await createdPed.save()
        res.json({payload:savedPed})
    }catch (e){
        res.status(500).json({message: "failure", error:e.message})
    }
}

module.exports={
    getAllPed,
    createPed
}