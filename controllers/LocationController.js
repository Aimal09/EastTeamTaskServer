import Location from "../models/locationModel.js";

const AddLocation = async (req, res) => {
    try {
        const {name} = req.body;
        
        const newLocation = new Location({name});

        await newLocation.save();
        res.status(201).json({ message: 'Location added successfully', location: newLocation });
    } catch (error) {
        res.status(400).json({ message: 'Error adding location', error });
    }
}

export default AddLocation;