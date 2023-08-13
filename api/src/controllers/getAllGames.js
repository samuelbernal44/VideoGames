require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');

const getAllGames = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 20;
  const offset = (page - 1) * pageSize;
  const limit = pageSize;

  // Validar que el tamaño de página y el desplazamiento no excedan los primeros 100 juegos
  if (offset + limit > 100) {
    return res
      .status(400)
      .json({ error: 'Solo se pueden obtener los primeros 100 juegos' });
  }

  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`
    );
    // console.log(response.data.results);
    const games = response.data.results.map((game) => ({
      id: game.id,
      name: game.name,
      // description: game.description,
      platforms: game.platforms
        .map((platform) => platform.platform.name)
        .join(', '),
      image: game.background_image,
      releaseDate: game.released,
      rating: game.rating,
      genres: game.genres.map((genre) => genre.name).join(', '),
      created: false,
    }));

    if (page === 1) {
      const dbGames = (
        await Videogame.findAll({
          include: {
            model: Genre,
            attributes: ['name'],
            through: { attributes: [] },
          },
        })
      ).map((game) => ({
        id: game.id,
        name: game.name,
        description: game.description,
        platforms: game.platforms,
        image: game.image,
        releaseDate: game.releaseDate,
        rating: game.rating,
        genres: game.genres.map((genre) => genre.name).join(', '),
        created: true,
      }));

      // Combinar juegos de la API y la base de datos
      games.push(...dbGames);
    }
    res.json({
      games,
      totalPages: response.data.count,
      // currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllGames;
