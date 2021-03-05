import express from 'express';
import bodyParder from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './routes/course.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended : true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended : true }));
app.use(cors());

app.use('/course', Routes);

const CONNECTION_URL = "mongodb+srv://mahdi:06061997mh@pi.0ju2z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true })
.then(() => app.listen(PORT , () => console.log(`server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
