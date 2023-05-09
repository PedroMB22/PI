const axios = require('axios');
const {Dog} = require('../db.js');
const { v4: uuidv4, validate: validateUUID } = require('uuid');

module.exports.getRazaById = async (req, res) => {
  const razaId = req.params.id;

      
try {
    if (validateUUID(razaId)) {
      const dogsDbId = await Dog.findOne({ where: { id: razaId } });
      if (dogsDbId) {
        res.status(200).json(dogsDbId);
      } else {
        res.status(404).json({ message: 'No se encontró el perro en la base de datos' });
      }
    } else {
      let razaById = await axios.get(`https://api.thedogapi.com/v1/breeds/${razaId}`);
      if (Object.keys(razaById.data).length > 0) {
        res.status(200).json(razaById.data);
      } else {
        res.status(404).json({ message: 'No se encontró el perro en la API' });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error de servidor' });
  }
};
