const axios = require('axios');

module.exports.getDogsByName = async (req, res) => {
    const name = req.query.name;
    try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
        if (response.data.length > 0) {
            res.status(200).json(response.data);
        } else {
            res.status(404).json({ message: 'No se encontró ninguna raza de perro con ese nombre.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error de servidor' });
    }
};
