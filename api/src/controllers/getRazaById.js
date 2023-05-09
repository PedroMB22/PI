const axios = require('axios');
const {Dog} = require('../db.js');

/* module.exports.getRazaById = async (req, res) => {
    const razaId = req.params.id;
    console.log(razaId);
    //let razaById = await axios.get(`https://api.thedogapi.com/v1/breeds/${razaId}`);
    //try {
    //    if (razaById) res.status(200).json(razaById.data);
    //    else res.status(401).json ({ message: 'Error al obtener la raza'});
    //}
    try {const dogsDbId = await Dog.findByPk(razaId);
        console.log(dogsDbId);
        if (isNaN(dogsDbId)) {
            res.status(200).json(dogsDbId);
        } else {
            res.status(401).json({ message: 'No se encontraron perros en la base de datos' });
          }
        }catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error de servidor' });
        }
    } */

    module.exports.getRazaById = async (req, res) => {
        const razaId = req.params.id;
        
        try {
            if (razaId.length < 4 ) {
        let razaById = await axios.get(`https://api.thedogapi.com/v1/breeds/${razaId}`);
        res.status(200).json(razaById.data);
            }
        else if (razaId.length > 4 ) {
        const dogsDbId = await Dog.findOne({ where: { id: razaId } });
          console.log(dogsDbId);
          res.status(200).json(dogsDbId);
          } else {
            res.status(404).json({ message: 'No se encontró el perro en la base de datos' });
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Error de servidor' });
        }
      };
      
      





/* module.exports.getDogsDBid = async (req, res) => {
    try {
    const dogsDbId = await Dog.findByPk(req.params.id);
    if (dogsDbId.length>6 ) {
        res.status(200).json(dogsDbId);
    } else {
        res.status(401).json({ message: 'No se encontraron perros en la base de datos' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error de servidor' });
    }
} */
