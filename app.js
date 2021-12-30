import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import { verifyToken } from './src/middleware/auth';
import { syntaxChecker } from './src/middleware/syntaxChecker';

dotenv.config();

const { PORT } = process.env || 3000;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/deneme', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// middlewares & routes
app.use(syntaxChecker);
app.use(verifyToken);
routes(app);


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));