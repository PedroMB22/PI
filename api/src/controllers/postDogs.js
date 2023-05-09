const { Dog, Temperament } = require('../db.js');

module.exports.postDogs = async (req, res) => {
    try {
        const { name, height, weight, years_old, image, temperament } = req.body;
        const newDog = {
            name,
            height,
            weight,
            years_old,
            image
        };

        const dogCreated = await Dog.create(newDog);
        if (dogCreated) {
            if (temperament) {
                const foundTemperament = await Temperament.findOne({
                    where: {
                        name: temperament
                    }
                });

                if (foundTemperament) {
                    await dogCreated.addTemperament(foundTemperament);
                }
            }

            res.status(200).json(dogCreated);
        } else {
            res.status(401).json({ message: 'Error al crear la raza' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error de servidor' });
    }
};
