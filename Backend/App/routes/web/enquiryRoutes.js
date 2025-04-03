let express = require('express');
const { enquiryInsert, enquiryList, deleteEnquiry } = require('../../controllers/web/enquiryController');
let enquiryRouter = express.Router();

enquiryRouter.post('/insert', enquiryInsert);
enquiryRouter.get('/view', enquiryList);
enquiryRouter.delete('/delete/:id', deleteEnquiry)

module.exports = enquiryRouter;