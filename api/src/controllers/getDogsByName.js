const axios = require('axios');

//GET | /dogs/name?="..."
//Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
//Debe poder buscarlo independientemente de mayúsculas o minúsculas.
//Si no existe la raza, debe mostrar un mensaje adecuado.
//Debe buscar tanto los de la API como los de la base de datos.

module.exports.getDogsByName = async (req, res) => {
    const name = req.query.name;
    //Search By 'Raza': "https://api.thedogapi.com/v1/breeds/search?q={raza_perro}"

    let dog = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
    try {
       
        if (dog) res.status(200).json(dog.data);
        else res.status(401).json ({ message: 'Error al obtener la raza'});
    }
    catch (err) {
        res.status(500).json({ message: 'Error de servidor' });
    }
}
