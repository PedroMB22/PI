const axios = require('axios');

module.exports.getRazaById = async (req, res) => {
    const razaId = req.params.id;
    let razaById = await axios.get(`https://api.thedogapi.com/v1/breeds/${razaId}`);
    try {
        if (razaById) res.status(200).json(razaById.data);
        else res.status(401).json ({ message: 'Error al obtener la raza'});
    }
    catch (err) {
        res.status(500).json({ message: 'Error de servidor' });
    }
}