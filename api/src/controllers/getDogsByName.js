const axios = require('axios');
const { Dog } = require('../db.js');
const { Op } = require('sequelize');

module.exports.getDogsByName = async (req, res) => {
    const name = req.query.name;
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
    const responseDb = await Dog.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
    let allDogsName;
    try {

        if (response.data.length > 0 || responseDb.length > 0) {
            allDogsName = response.data.concat(responseDb);
            res.status(200).json(allDogsName);
        } else {
            res.status(404).json({ message: 'No se encontró ninguna raza de perro con ese nombre.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error de servidor' });
    }
};

