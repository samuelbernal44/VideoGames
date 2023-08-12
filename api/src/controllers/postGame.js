const { Videogame, Genre } = require('../db');

const postGame = async (req, res) => {
  const { name, description, platforms, image, releaseDate, rating, genres } =
    req.body;

  try {
    // Create a new video game in the database
    const videogame = await Videogame.create({
      name,
      description,
      platforms,
      image,
      releaseDate,
      rating,
      created: true,
    });

    // Find or create the genres in the database
    const genreInstances = await Promise.all(
      genres.map((genre) =>
        Genre.findOrCreate({
          where: { name: genre },
        }).then(([instance]) => instance)
      )
    );

    // Associate the video game with its genres
    await videogame.addGenres(genreInstances);

    res.status(201).json(videogame);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postGame;
