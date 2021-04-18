let mix = require('laravel-mix');

mix.js('resources/js/app.js','public/js/app.js').version();
mix.sass('resources/scss/app.scss','public/css/app.css');