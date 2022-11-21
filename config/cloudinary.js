const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: 'dm9ffhfmz',
    api_key: '929291323659316',
    api_secret: 'J5jYz4kGTtRHqHfhQK20ow8V730',
    secure: true
});

module.exports = cloudinary