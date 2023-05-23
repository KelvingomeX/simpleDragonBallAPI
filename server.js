const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();
const PORT = 8000;


const characters={
    'goku': {
        "powerLevel": 1000000,
        "healthPoints": 250,
        "specialMove": "Kamehameha",
        "superSpecial-1": "Sprint Boom",
        "superSpecial-2": "Dragon Fist",
        "img":"https://static.wikia.nocookie.net/dragonball/images/e/e4/Goku_arrives_colored.PNG/revision/latest?cb=20210204093245"
    },
    'vegeta': {
        "powerLevel": 999999,
        "healthPoints": 250,
        "specialMove": "Garlick Gun",
        "superSpecial-1": "Big Ban Attack",
        "superSpecial-2": "Final Flash",
        "img":"https://static.wikia.nocookie.net/dragonball/images/2/2c/Vegeta_Manga.png/revision/latest?cb=20210903211722"
        
    },
    'gohan': {
        "powerLevel": 995000,
        "healthPoints": 250,
        "specialMove": "Masenko",
        "superSpecial-1": "Super Kamehameha",
        "superSpecial-2": "Father-Son Kamehameha",
        "img":"https://static.wikia.nocookie.net/dragonball/images/5/51/Dragon_Ball_Gohan_Kanzenban.png/revision/latest?cb=20210903210235"
    },
    'picolo': {
        "powerLevel": 900000,
        "healthPoints": 250,
        "specialMove": "Masenko",
        "superSpecial-1": "Special Beam Cannon",
        "superSpecial-2": "Demon Strike",
        "img":"https://static.wikia.nocookie.net/dragonball/images/c/c2/Piccolomanga.png/revision/latest?cb=20160826150304"
    },
    'yamcha': {
        "powerLevel": 4000,
        "healthPoints": 250,
        "specialMove": "Wolf Fang Fist.",
        "superSpecial-1": "Kamehameha",
        "superSpecial-2": "Die",
        "img":"https://e.rpp-noticias.io/large/2022/03/18/121112_1233510.jpg"

    }
    
}
router.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  
  router.get('/api/:characterDB', (req, res) => {
    const characterDB = req.params.characterDB.toLowerCase();
    if (characters[characterDB]) {
      res.json(characters[characterDB]);
    } else {
      res.json(characters['yamcha']);
    }
  });
  
  app.use(express.json());
  app.use('/.netlify/functions/api', router); // Use a base path for the API
  
  module.exports = app;
  module.exports.handler = serverless(app);
    
    app.listen(process.env.PORT || PORT, ()=>{
        console.log(`The server is running on port ${PORT}! You better go catch it!`)
    })