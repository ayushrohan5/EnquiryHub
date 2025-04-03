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

let enquiryList = async(req, res) => {  
    let enquiry = await enquiryModel.find();
    res.status(200).json({status: 1, message:"Enquiry list", data: enquiry});
    
}

let deleteEnquiry = async(req, res)=>{
    enquiryId = req.params.id;
    let deleteEnquiry = await enquiryModel.deleteOne({_id:enquiryId});
    res.send({status:1, msg:"enquiry deleted succcessfully", deleteData:deleteEnquiry});
}

module.exports = {enquiryInsert,enquiryList, deleteEnquiry}