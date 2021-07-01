const request = require("request");
//let breedName  = "Siberian";
const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, resp, body) => {
      // console.log(body);
      // console.log(typeof body);
      if (error) {
        callback(`Failed to request details: ${error}`, null);
      }
      const data = JSON.parse(body);
      // console.log(data);
      const breed = data[0];
      if (breed) {
        callback(null, breed.description);
      } else {
        callback(`Failed to find breed ${breedName}`, null);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
