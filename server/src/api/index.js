import { version } from '../../package.json';
import { Router } from 'express';

export default ({ config }) => {
	const api = Router();

	api.get('/', (reg,res) => {
		res.json({ version });
	});

	return api;
}