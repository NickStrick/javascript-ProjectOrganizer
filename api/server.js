const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const projectRouter = require('./routers/projRouter.js');
const authRouter = require('./routers/authRouter.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Api Working');
})

server.use('/projects', projectRouter);
server.use('/api', authRouter);


module.exports = server;