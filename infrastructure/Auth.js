import fs from 'fs';
import bcrypt from 'bcryptjs';

export const validatePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

export const getKey = async () => {
    return new Promise((res, rej) => {
        fs.readFile("private_key.key", "utf8", (err, data) => {
            if (err) rej(err);
            if (data) res(data);
        })
    })
}