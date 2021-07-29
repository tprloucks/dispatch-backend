const Officer = require("../model/Officer")

async function getAllOfficer(req, res){
    try {
        let foundAllOfficer = await Officer.find({})
        res.json({message:"success", payload:foundAllOfficer})
    } catch (e) {
        res.status(500).json({message:"failure", error:e.message})
    }
}

async function createOfficer(req, res){
    
    try {
        let createdOfficer = new Officer({
            lastName:req.body.lastNameInput,
            badge:req.body.badgeInput,
            status:req.body.statusInput,
            beat:req.body.beatInput,
            
            
        })
        let savedOfficer = await createdOfficer.save()
        res.json({payload:savedOfficer})
    }catch (e){
        res.status(500).json({message: "failure", error:e.message})
    }
}

module.exports={
    getAllOfficer,
    createOfficer
}