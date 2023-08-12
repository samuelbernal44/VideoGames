const axios = require('axios');
const { Genre } = require('../db');
const { API_KEY } = process.env;

const getGenres = async (req, res) => {
  try {
    // Check if genres are already in the database
    let genres = await Genre.findAll();
    if (genres.length === 0) {
      // If not, fetch genres from the RAWG API
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      );
      const apiGenres = response.data.results;

      // Save genres to the database
      genres = await Genre.bulkCreate(
        apiGenres.map((genre) => ({
          id: genre.id,
          name: genre.name,
        }))
      );
    }

    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getGenres;
