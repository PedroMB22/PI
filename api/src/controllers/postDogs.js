const sequelize = require('sequelize');
const { Dog } = require('../db.js');

module.exports.postDogs = async (req, res) => {
    try {
        const {name, height, weight, years_old, image, temperaments} = req.body;
        const newDog = {
            name,
            height,
            weight,
            years_old,
            image,
            temperaments
        };
        const dogCreated = await Dog.create(newDog);
        if (dogCreated) res.status(200).json(dogCreated);
        else res.status(401).json ({ message: 'Error al crear la raza'});
    }
        
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error de servidor' });
    }

};