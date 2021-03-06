requirejs.config({
    baseUrl: '/assets/js',
    paths: {
        'jquery':         '../bower_components/jquery/dist/jquery',
        'jquery-timeago': '../bower_components/jquery-timeago/jquery.timeago',
        'handlebars':     '../bower_components/handlebars/handlebars.runtime',
        'text':           '../bower_components/requirejs-text/text'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});


require(['jquery', 'ga', 'variables'], function ($) {
    'use strict';

    $(function () {
        /***** On-demand script loading *****/

        if (Modernizr.canvas) {
            $('#tetris .image').on('click', function () {
                require(['tetris']);
                ga('send', 'event', 'Tetris', 'Load');
            });
        }

        if ($('#comments').length > 0) {
            require(['comments']);
        }

        if ($('.codepen').length > 0) {
            require(['https://codepen.io/assets/embed/ei.js']);
        }


        /***** Event tracking *****/

        $('.search').on('submit', function () {
            ga('send', 'event', 'Site search', 'Submit');
        });

        $('#skip-top a').on('click', function () {
            ga('send', 'event', 'Site navigation', 'In-page link', 'Skip to top of page');
        });
    });
});
