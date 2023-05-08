const axios = require('axios');

module.exports.getDogsByName = async (req, res) => {
    const {dogsByName} = req.query;
    let dogs = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dogsByName}`);
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

 