define(['variables'], function (variables) {
    'use strict';

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', variables.googleAnalyticsId, {
        //'cookieDomain': 'none',
        'siteSpeedSampleRate': 100
    });
    ga('send', 'pageview');


    // Track javascript errors using Google Analytics
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
});
