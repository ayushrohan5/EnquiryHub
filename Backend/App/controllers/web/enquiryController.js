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

let enquiryDelete = async(req, res)=>{
   let enId = req.params.id;
    let enquiry = await enquiryModel.deleteOne({_id:enId});
    res.send({status:1, msg:"enquiry deleted succcessfully", enquiry});
}

let enquirysingleRow =  async(req, res) => {
    let enId = req.params.id;
   

    let enquiry = await enquiryModel.findOne({_id:enId});

     res.send({status: 'ok', enquiry});
}

let enquiryUpdate =  async(req, res) => {
    let enquiryId = req.params.id;
    let {name, email, phone, message} = req.body;
    let updateObj={
        name:name,  
        email:email,
        phone:phone,
        message:message
    
    }

    let updateRes = await enquiryModel.updateOne({_id: enquiryId}, updateObj);

    res.send({status: 'ok', message:"enquiry updated", updateRes});
}



module.exports = {enquiryInsert,enquiryList, enquiryDelete, enquirysingleRow, enquiryUpdate};