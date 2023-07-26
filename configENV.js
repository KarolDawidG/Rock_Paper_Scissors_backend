require('dotenv').config();

module.exports = {
    pass: process.env.PASS,
    user: process.env.USER,
    service: process.env.service,
    PORT:process.env.PORT || 3000,
};

