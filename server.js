const Bundler = require('parcel-bundler');
const app = require('express')();
const filePath = './src/index.html'; 

// Initialize a new bundler using a file and options
const bundlerOptions = { production: process.env.NODE_ENV === 'production' };
const bundler        = new Bundler( filePath, bundlerOptions );

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(bundler.middleware());

// Listen on port 4343
app.listen(4343);