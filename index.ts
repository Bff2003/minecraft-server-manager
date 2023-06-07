import express from 'express';
import { Request, Response } from 'express';

class Server {

    private started: boolean = false;
    private app: express.Application;

    constructor() {
        console.log('Server created');
        this.start();
        this.app = express();
    }

    public start() {
        if (this.started) throw new Error('Server is already started');
        console.log('Server started');
        this.started = true;
    }

    public stop() {
        if (!this.started) throw new Error('Server is already stopped');
        console.log('Server stopped');
        this.started = false;
    }
}

let server = new Server();