const express = require('express')
const app = express()
const port = 3000

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let characters = [];

app.route('/characters')
 .get((req, res) => {
   res.json(characters);
 })
 .post((req, res) => {
   const newCharacter = { ...req.body, id: characters.length + 1 }
   characters = [...characters, newCharacter]
   res.json(newCharacter);
 })
.put((req, res) => {
   let updatedCharacter;
   characters = characters.map(p => {
     if (p.id === req.body.id) {
       updatedCharacter = { ...p, ...req.body };
       return updatedCharacter;
     }
     return p;
   })
   res.json(updatedCharacter);
 })
 .delete((req, res) => {
   const deletedCharacter = characters.find(p => p.id === +req.body.id);
   characters = characters.filter(p => p.id !== +req.body.id);
   res.json(deletedCharacter);
 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))