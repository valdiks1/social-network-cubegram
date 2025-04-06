import bcrypt from 'bcrypt';

const saltRounds = 10;

// returns promise!
export const hashPassword = (password) => {
    return bcrypt.hash(password, saltRounds);
};

// returns promise!
export const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compare(plainPassword, hashedPassword);
};

