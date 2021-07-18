const express = require("express")

const router = express.Router()


let{
    createPed,
    getAllPed,
}= require("./controller/PedController")

router.get("/get-all-ped", getAllPed)
router.post("/create-ped", createPed)

module.exports= router