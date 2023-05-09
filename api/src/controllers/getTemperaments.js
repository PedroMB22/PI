const axios = require('axios');

module.exports.getTemperaments = async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const temperaments = response.data.map(dog => ({
            temperament: dog.temperament
        }));

        const allTemperaments = temperaments.reduce((acumulador, valorActual) => {
            if (valorActual.temperament) {
                return acumulador.concat(valorActual.temperament.split(', '));
            }
            return acumulador;
        }, []);

        const uniqueTemperaments = [...new Set(allTemperaments)];

        if (uniqueTemperaments.length > 0) {
            res.status(200).json(uniqueTemperaments);
        }
        else {
            res.status(401).json({ message: 'Error al obtener los temperamentos' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error de servidor' });
    }
};
