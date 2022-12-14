const io = require('../server').io;

const Orb = require('./classes/Orbs');
let orbs = [];

initGame();

io.sockets.on('connect', (socket) =>
{
    console.log(socket.id);
    socket.emit('init', {orbs});
});

function initGame()
{
    for(let i = 0; i < 500; i++)
    {
        orbs.push(new Orb());
    }
}

module.exports = io;
