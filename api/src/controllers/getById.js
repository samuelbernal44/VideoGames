require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');
const { validate: uuidValidate } = require('uuid');

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    if (uuidValidate(id)) {
      // Buscar el videojuego en la base de datos
      const videogame = await Videogame.findByPk(id, {
        include: Genre,
      });

      if (videogame) {
        // Si se encontró el videojuego en la base de datos, devolverlo
        res.json(videogame);
        return;
      }
    }
    // Si no se encontró el videojuego en la base de datos, buscarlo en la API de RAWG
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    const game = response.data;

    res.json({
      id: game.id,
      name: game.name,
      description: game.description,
      platforms: game.platforms
        .map((platform) => platform.platform.name)
        .join(', '),
      image: game.background_image,
      releaseDate: game.released,
      rating: game.rating,
      genres: game.genres.map((genre) => genre.name),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getById;
