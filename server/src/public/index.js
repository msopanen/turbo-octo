import fs from 'fs';
import { Router } from 'express';
import path from "path";

const index = path.join(__dirname, '../../public/index.html');

export default ({ config }) => {
	const r = Router();
  console.log({config})
	r.get('/', (reg,res) => {
    fs.readFile(index, 'utf-8', (err, data) => {
    		if (err) {
      			res.writeHead(500);
      			res.end(err);
      			return;
    		}
    		res.writeHead(200);
    		res.end(data.replace('CONFIG_PLACEHOLDER', JSON.stringify(config)), 'utf8');
  		});
	});

	return r;
}