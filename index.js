import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import Login from './controllers/LoginController.js';
import AddEmployee from './controllers/EmployeeController.js';
import AddLocation from './controllers/LocationController.js';
import GlobalTrackingSettings from './controllers/SettingsConroller.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

const getSecret = () => {
    const jwtSecret = fs.readFileSync('private_key.key', 'utf8');
    process.env.JWT_SECRET = jwtSecret.trim()
}
getSecret();

app.post('/api/login', Login);

app.post('/api/addEmployee', AddEmployee);

app.post('/api/addLocation', AddLocation);

app.put('/api/updateGlobalTrackingSetting', GlobalTrackingSettings);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});