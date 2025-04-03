const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req,res)=>{

    let{name, email, phone, message} = req.body;
    let enquiry= new enquiryModel({
        name:name,            //1st name is coming from model and 2nd name is coming from req.body
        email:email,
        phone:phone,
        message:message
    });

    enquiry.save().then(() => {
        res.send({status: 'ok', message:"enquiry inserted"});
    }).catch((err) => {
        res.send({status: 'error', message: err.message});
    });
}




module.exports = {enquiryInsert}