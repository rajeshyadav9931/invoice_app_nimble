const express=require("express")
const {InvoiceModel}=require("../model/Invoice");


const InvoiceRouter= express.Router()

InvoiceRouter.post("/add", async (req, res) => {
    const payload = req.body;

    try {
        const invoice = new InvoiceModel(payload);
        await invoice.save();
        res.status(200).send({ "msg": "Invoice document  has been added successfully!!" })
    } catch (error) {
        res.status(400).json({ error: error });
    }
})

InvoiceRouter.get("/",async (req,res)=>{
    try {
        const searchQuery = req.query
        let invoice;

        if(searchQuery){
             invoice = await InvoiceModel.find(searchQuery);
        }else{
             invoice=await InvoiceModel.find({});
        }
        
        res.status(200).json(invoice)
    } catch (error) {
        res.status(400).json({"err":error})
    }
})

module.exports = { InvoiceRouter };