const axios = require('axios');
const { API_KEY } = process.env;

const getPlatform = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/platforms?key=${API_KEY}`
    );
    console.table(response);
    let platformsName = response.data.results.map((platform) => platform.name);
    res.json(platformsName);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPlatform;
