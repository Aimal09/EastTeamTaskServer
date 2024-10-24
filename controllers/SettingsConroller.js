import dotenv from 'dotenv';
dotenv.config();

const GlobalTrackingSettings = (req, res) => {
    try {
        const {isGlobalTrackingEnabled} = req.body;
        process.env.IS_GLOBAL_TRACKING_ENABLED = isGlobalTrackingEnabled;

        res.status(201).json({ message: 'Global Tracking setting is updated', isGlobalTrackingEnabled });
    } catch (error) {
        res.status(400).json({ message: 'Error updating Global Tracking setting', error });
    }
}

export default GlobalTrackingSettings;