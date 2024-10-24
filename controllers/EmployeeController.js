import bcrypt from 'bcryptjs';
import Employee from '../models/employeeModel.js';

const AddEmployee = async (req, res) => {
    try {
        const {
            employeeId,
            name,
            email,
            password,
            locationId,
            organizationId,
            payrollId,
            employeePayrollId,
            accessRole,
            role,
            picture,
            deleted_at
        } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newEmployee = new Employee({
            employeeId,
            name,
            email,
            password: hashedPassword,
            locationId,
            organizationId,
            payrollId,
            partnerId: process.env.PARTNER_ID,
            employeePayrollId,
            accessRole,
            role,
            picture,
            deleted_at
        });

        await newEmployee.save();
        res.status(201).json({ message: 'Employee added successfully', employee: newEmployee });
    } catch (error) {
        res.status(400).json({ message: 'Error adding employee', error });
    }
}

export default AddEmployee;