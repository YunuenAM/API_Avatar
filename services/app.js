const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Avatar'));


app.get("/characters", (req,res) => {
    const characters = [
    {
      id: 1,
      name: "Aang",
      nationality:"southern air temple",
      ethnicity: "Air Nomads",
      age: 112,
      weapon: "control gear & Aang's glider",
      phrase: "When we hit our lowest point we are open to the greatest change"
      
    },
    {
      id: 2,
      name: "Zuko",
      nationality: "fire nation",
      ethnicity: "fire nation",
      age:   16,
      weapon: "fire & dual dao swords",
      phrase:  "You're So Beautiful When You Hate The World."
    },
    {
      id: 3,
      name: "Katara",
      nationality: "southern water tribe",
      ethnicity: "water tribe",
      age: 14 ,
      weapon: "water" ,
      phrase: "Love is brightest in the dark"
    },
   ];
  
   res.json(characters);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));