requirejs.config({
    baseUrl: '/assets/js',
    paths: {
        'jquery':         '../bower_components/jquery/jquery',
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


require(['jquery', 'ga'], function ($) {
    'use strict';

    // Track JavaScript errors in Google Analytics
    window.onerror = function (message, file, line, column) {
        var a = window.document.createElement('a');
        a.href = file;
        var host = a.hostname;

        ga(
            'send',
            'event',
            (host === window.location.hostname || host === null || host === '' ? '' : 'external ') + 'error',
            message,
            file + ' LINE:' + line + (column ? ' COLUMN:' + column : ''),
            {'nonInteraction': true}
        );
    };


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


        /***** Event tracking *****/

        $('.search').on('submit', function () {
            ga('send', 'event', 'Site search', 'Submit');
        });

        $('#skip-top a').on('click', function () {
            ga('send', 'event', 'Site navigation', 'In-page link', 'Skip to top of page');
        });
    });
});
