const fetch = require("node-fetch");
require("dotenv").config();

const myApiKey = process.env.CLIMACELL_API_KEY;

(async function main() {
  try {
    const res = await fetch(
      `https://api.climacell.co/v3/weather/realtime?lat=39.7392&lon=104.9903&unit_system=us&fields=pollen_tree&fields=pollen_weed&fields=pollen_grass&fields=temp&apikey=${myApiKey}`
    );
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.error("ERROR");
    console.error(err);
  }
})();
