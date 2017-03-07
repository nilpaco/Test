// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        'app': '../app',
        'd3': 'd3.min',
        'd3pie': 'd3pie.min',
        'jasmine': '../tests/lib/jasmine',
        'jasmine-hmtl': '../tests/lib/jasmine-hmtl',
        'jasmine-boot': '../tests/lib/boot'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main', 'd3', 'd3pie', 'jasmine']);