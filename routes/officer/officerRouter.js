const { response } = require("express")
const express = require("express")

const router = express.Router()

let{
    createOfficer,
    getAllOfficer,

}=require("./controller/OfficerController")

router.get("/get-all-officer", getAllOfficer)
router.post("/create-officer", createOfficer)

module.exports=router