const { Dog, Temperament } = require("../db.js");

module.exports.postDogs = async (req, res) => {
  try {
    const { name, height, weight, life_span, image, temperament } = req.body;

    const newDog = {
      name,
      height,
      weight,
      life_span,
      image: image || 'https://iheartcraftythings.com/wp-content/uploads/2021/04/Drawing-Dog-in-10-Easy-Steps.jpg',
    };

    const dogCreated = await Dog.create(newDog, {
      include: {
        model: Temperament,
      },
    });
    if (dogCreated) {
      if (temperament) {
        const foundTemperament = await Temperament.findOne({
          where: {
            name: temperament,
          },
        });
        if (foundTemperament) {
          await dogCreated.addTemperament(foundTemperament);
        }
      }

      res.status(200).json(dogCreated);
    } else {
      res.status(401).json({ message: "Error al crear la raza" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error de servidor" });
  }
};