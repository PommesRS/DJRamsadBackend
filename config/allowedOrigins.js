const allowedOrigins = [
    'https://www.DJRamsad.de',
    'http://127.0.0.1:5500',
    'http://localhost:3500',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://192.168.2.109:5000',
    'https://djramsad.netlify.app',
    `'${process.env.CUSTOM_CORS_URL1}'`,
    `'${process.env.CUSTOM_CORS_URL2}'`
];

module.exports = allowedOrigins;