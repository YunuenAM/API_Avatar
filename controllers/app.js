const express = require('express')
const app = express()
const port = 3000

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let characters = [];

app.post('/characters', function(req, res) {
  const newCharacter = { ...req.body, id: characters.length + 1 }
  characters = [ ...characters, newCharacter]
  res.json(newCharacter);
});

app.put('/characters', function(req, res) {
  let updatedCharacter;
  characters = characters.map(p => {
    if (p.id === req.body.id) {
      updatedCharacter = { ...p, ...req.body };
      return updatedCharacter;
    }
    return p;
  })
  res.json(updatedCharacter);
});

app.delete('/characters/:id', function(req, res) {
  const deletedCharacter = characters.find(p => p.id === +req.params.id);
  characters = characters.filter(p => p.id !== +req.params.id);
  res.json(deletedCharacter);
});

app.get('/characters', (req, res) => {
    res.json(characters);
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  
