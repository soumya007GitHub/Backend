var slugify = require('slugify')

const homepage = slugify('codeyatra/index.html');

const aboutUs = slugify('codeyatra/about.html', '_');

console.log(homepage);
console.log(aboutUs);