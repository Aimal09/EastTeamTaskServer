import Employee from "../models/employeeModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const _employee = await Employee.findOne({ email });
        if (!_employee) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, _employee.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const currentEmployee = _employee.toObject();
        const employee = {
            id:currentEmployee._id,
            employeeId: currentEmployee._id,
            locationId: currentEmployee.locationId,
            organizationId: currentEmployee.organizationId,
            partnerId: currentEmployee.partnerId,
            payrollId: currentEmployee.payrollId,
            employeePayrollId: currentEmployee.employeePayrollId,
            accessRole: currentEmployee.accessRole,
            role: currentEmployee.role,
            isGlobalTrackingEnabled: process.env.IS_GLOBAL_TRACKING_ENABLED
          }

        const token = jwt.sign(employee, process.env.JWT_SECRET, { algorithm: 'RS256' });
        
        const employees = await Employee.find();
        let formatedEmployee = employees.map(em => ({
            id: em._id,
            name: em.name,
            picture: em.picture,
            payrollId: em.payrollId,
            deleted_at: em.deleted_at,
            
        }))
        
        formatedEmployee = employee.role.name === "admin" ? formatedEmployee : formatedEmployee.filter(e=> e.id.equals(employee.employeeId));
        
        res.json({ token, employee: employee,employees:formatedEmployee });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export default Login;