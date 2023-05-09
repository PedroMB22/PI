const axios = require('axios');
const dogsService = require('../services/getDogs.services');
const { Dog } = require('../db.js');
const sequelize = require('sequelize');

module.exports.getDogs = async (req, res) => {
    let dogsFromAPI = await axios.get("https://api.thedogapi.com/v1/breeds");
    let dogsFromDB = await Dog.findAll();
    console.log(dogsFromDB)
    let allDogs;
  try {
    dogsFromAPI = dogsFromAPI.data.map((dog) => {
      return {
        id: dog.id,
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        image: dog.image.url,
        temperament: dog.temperament,
      };
    });
    if (dogsFromDB.length > 0 || dogsFromAPI.length > 0) {  
        allDogs = dogsFromAPI.concat(dogsFromDB);
        res.status(200).json(allDogs);
    } else {
      res.status(401).json({ message: "Error al obtener la raza" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error de servidor" });
  }
};

module.exports.getDogsDB = async (req, res) => {
    try {
      const dogs = await Dog.findAll();
      console.log(dogs);
      if (dogs.length > 0) {
        res.status(200).json(dogs);
      } else {
        res.status(401).json({ message: 'No se encontraron perros en la base de datos' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error de servidor' });
    }
}