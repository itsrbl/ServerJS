const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
require('dotenv').config();
const fs = require('fs');


/* Variable Declarations */
let apiFolderName = 'api';
let adminFolderName = 'admin';

app.use(cors());
app.use(morgan(':method :url :status :user-agent - :response-time ms'));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'src/views/partials')]);

const routes = require('./src/routes/admin/user.routes');
app.use('/', routes);

(async function() {
	const apiFiles = fs.readdirSync(`./src/routes/${apiFolderName}`);
	// apiFiles.forEach(file => {
	// 	if (!file && file[0] == '.') return;
	// 	app.use(`/${apiFolderName}`, require(path.join(`./src/routes/${apiFolderName}`, file)));
	// });
	const adminFiles = fs.readdirSync(`./src/routes/${adminFolderName}`);
	adminFiles.forEach(file => {
		if (!file && file[0] == '.') return;
		app.use(`/${adminFolderName}`, require(path.join(__dirname,`./src/routes/${adminFolderName}`, file)));
	});
})()


require('./config/db')();
app.listen(process.env.PORT || 3000, function () {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});