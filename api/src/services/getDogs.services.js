/* const axios = require('axios');
const { Dog } = require('../db.js');
let dogsService = {};

dogsService.getDogsById = async () => {
    let allDogs;
    let allDogsAPI;

    {
    allDogs = await Dog.findAll();
    }
    return allDogs;
    /* else {
        allDogsAPI = await axios.get('https://api.thedogapi.com/v1/breeds');
    }
    return allDogs.concat(allDogsAPI); */


const axios = require('axios');
const { Dog } = require('../db.js');

let dogsService = {};

dogsService.getDogsById = async () => {
    let allDogsAPI = await axios.get('https://api.thedogapi.com/v1/breeds'); // Obtener todos los perros de la API
    // Filtrar los perros del servidor por ID


    return allDogsAPI.data.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
            image: dog.image.url,
            temperament: dog.temperament
        };
    });
};

module.exports = dogsService;




