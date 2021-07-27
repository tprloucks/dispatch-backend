const { response } = require("express")
const express = require("express")
const Officer = require("./model/Officer")
const router = express.Router()

let{
    createOfficer,
    getAllOfficer,

}=require("./controller/OfficerController")

router.get("/get-all-officer", getAllOfficer)
router.post("/creat-officer", createOfficer)

module.exports=router