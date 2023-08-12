require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Op } = require('sequelize');
const { Videogame, Genre } = require('../db');

const getByName = async (req, res) => {
  const { name } = req.query;
  const searchName = name.toLowerCase();
  try {
    // Search for video games in external API
    const apiResponse = await axios.get(
      `https://api.rawg.io/api/games?search=${searchName}&key=${API_KEY}`
    );
    const apiGames = apiResponse.data.results.map((game) => ({
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
    }));

    // Search for video games in local database
    const dbGames = (
      await Videogame.findAll({
        where: {
          name: {
            [Op.iLike]: `%${searchName}%`,
          },
        },
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
    }));

    // Combine and filter results
    const games = [...apiGames, ...dbGames];

    if (games.length === 0) {
      res.send('No video games found with the provided name');
    } else {
      res.json(games);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getByName;
