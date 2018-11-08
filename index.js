const express = require('express');
const app = express();

app.use(express.json());

const cards = [
    { id: 1, name: 'card1'},
    { id: 2, name: 'card2'},
    { id: 3, name: 'card3'},
];

// test
app.get('/', (req, res) => {
    res.send('Hello cards!');
});


app.get('/cardGame/cards', (req, res) => {
    res.send(cards);
});

app.post('/cardGame/cards', (req, res) => {
    const card = {
        id: cards.length + 1,
        name: req.body.name
    };
    cards.push(card);
    res.send(card);
});

app.get('/cardGame/cards/:id', (req, res) => {
    const card = cards.find(c => c.id === parseInt(req.params.id));
    if (!card) res.status(404).send('The card not found');
    res.send(card);
});

app.listen(3000, () => console.log(`Listening on port 3000...`));