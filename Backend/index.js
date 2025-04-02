let express = require('express');
let mongoose = require('mongoose');
const enquiryRouter = require('./App/routes/web/enquiryRoutes');
require('dotenv').config();
let app = express();

app.use(express.json());   // parse json data
app.use('/api/website/enquiry', enquiryRouter);



// connect to mongodb
mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log(err);
});