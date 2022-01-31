const mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js')
    .vue();

// let productionSourceMaps = false;
//
// mix.setPublicPath('public/build')
//     .setResourceRoot('build')
//     .js('resources/js/app.js', 'js').vue()
//     .sass('resources/sass/app.scss', 'css')
//     .version()
//     .options({
//         processCssUrls: false
//     })
//     .sourceMaps(productionSourceMaps, 'source-map')
//     .browserSync({
//         proxy: 'https://localhost:8088/',
//         files: [
//             'public/build/css/app.css',  // Generated .css file
//             'public/build/js/app.js',    // Generated .js file
//             'public/**/*.+(html|php)',          // Generic .html and/or .php files [no specific platform]
//             'app/**/*.+(html|php)',          // Generic .html and/or .php files [no specific platform]
//             'resources/views/**/*.php', // Laravel-specific view files
//         ],
//         notify: {
//             styles: {
//                 top: 'auto',
//                 bottom: '0'
//             }
//         },
//         open: false
//     });
