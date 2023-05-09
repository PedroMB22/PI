const axios = require('axios');
const dogsService = require('../services/getDogs.services');
const { Dog } = require('../db.js');

module.exports.getDogs = async (req, res) => {
    let dogs = await axios.get('https://api.thedogapi.com/v1/breeds');
    try {
        dogs = dogs.data.map(dog => {
            return {
                id: dog.id,
                name: dog.name,
                height: dog.height.metric,
                weight: dog.weight.metric,
                life_span: dog.life_span,
                image: dog.image.url,
                temperament: dog.temperament
            }
        })
        if (dogs) res.status(200).json(dogs);
        else res.status(401).json ({ message: 'Error al obtener la raza'});
    }
    catch (err) {
        res.status(500).json({ message: 'Error de servidor' });
    }
}

module.exports.getDogsDB = async (req, res) => {
    let dogs1 = await Dog.findAll({attributes: ['name']});
    try {
         
        if (dogs1) res.status(200).json(dogs1);
        else res.status(401).json ({ message: 'Error al obtener la raza'});
    }
    catch (err) {
        res.status(500).json({ message: 'Error de servidor' });
    }
}