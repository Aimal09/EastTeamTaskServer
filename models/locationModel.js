import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const Location = mongoose.model('Locations', locationSchema);

export default Location;