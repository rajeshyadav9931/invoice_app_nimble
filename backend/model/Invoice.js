const mongoose = require("mongoose");


const careerSchema = mongoose.Schema({
    currency: String,
    invBasicAmt: Number,
    invTaxAmt: Number,
    totalInvAmt: Number,
    advancePaid: Number,
    tcsApplicable: Boolean,
    netPayableAmt: Number,
    alternatePayee1: String,
    alternatePayee2: String,
    city: String,
    street: String,
    country: String,
    bankKey: String,
    bankAccNo: String,
},{
    versionKey: false
})

const InvoiceModel = mongoose.model("invoice", careerSchema);

module.exports = { InvoiceModel }