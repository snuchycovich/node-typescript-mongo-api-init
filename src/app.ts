import express from 'express';
import bodyParser from "body-parser";
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import indexRoutes from './routes/index';


class App {
    public app: express.Application;
    
    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        dotenv.config();
        // settings
        this.app.set('port', process.env.PORT || 3000);

        //middlewares
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());        
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());

        
        // folder will be use to store public files
        this.app.use('/uploads', express.static(path.resolve('uploads')))
    }

    // routes
    public routes(): void {
        this.app.use('/api',indexRoutes);
    }
}

export default new App().app;