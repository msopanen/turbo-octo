import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from '../config.json';
import api from "./api";
import pub from "./public";

const app = express();

app.use(morgan('dev'));

app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.use('/api', api({ config }));
app.use('/', pub({ config }));

app.set('port', process.env.PORT || config.port);
app.listen(app.get('port'), () => {
	console.log(`Started on port ${app.get('port')}`);
})