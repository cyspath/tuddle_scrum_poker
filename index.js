const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
// const http = require('http').Server(app);
// let io = require('socket.io')(http);

// self ping keeps heroku dynos from falling asleep
require('heroku-self-ping')("https://helios-tuddle.herokuapp.com/");

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);

console.log('TuddleApp is listening on port ' + port);