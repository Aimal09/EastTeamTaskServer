import express from 'express';
import dotenv from 'dotenv';
import Login from './controllers/LoginController.js';
import AddEmployee from './controllers/EmployeeController.js';
import AddLocation from './controllers/LocationController.js';
import GlobalTrackingSettings from './controllers/SettingsConroller.js';
import { DatabaseClient } from './infrastructure/DatabaseClient.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

const dbClient = new DatabaseClient();

dbClient.initialize();


app.post('/api/login', Login);

app.post('/api/addEmployee', AddEmployee);

app.post('/api/addLocation', AddLocation);

app.put('/api/updateGlobalTrackingSetting', GlobalTrackingSettings);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});