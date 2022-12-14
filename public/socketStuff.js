let socket = io('http://localhost:5000');

socket.on('init', (data) =>
{
    orbs = data.orbs;
});