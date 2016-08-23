// Shortcut for $(document).ready()
$(function() {

    var tmax_opts = {
        delay: 0.25, // init pause time
        repeat: -0, // make it repeat
        repeatDelay: 0.25, // delay this amount on repeat
        yoyo: true // also play sequence in reverse
    };

    var tmax_tl           = new TimelineMax(tmax_opts),
        herosvg_shapes   = $('svg.herosvg > polygon'),
        herosvg_stagger  = 0.00475,
        herosvg_duration = 1.5;

    var herosvg_staggerFrom = {
        scale: 0,
        opacity: 0,
        transformOrigin: 'center center',
    };

    var herosvg_staggerTo = {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeInOut
    };

    tmax_tl.staggerFromTo(herosvg_shapes, herosvg_duration, herosvg_staggerFrom, herosvg_staggerTo, herosvg_stagger, 0);

});


// Shortcut for $(document).ready()
$(function () {
    // Call on every window resize
    $(window).resize(function () {

        var svgRoot = document.getElementById('graphiclayer');

        var vbValue1 = '580 320 900 360';
        var vbValue2 = '0 0 1400 400';
        var vbValue3 = '0 0 2000 360';

        if (Modernizr.mq('(max-width: 667px)')) {
            svgRoot.setAttribute('viewBox', vbValue1);
        } else if (Modernizr.mq('(max-width: 1400px)')) {
            svgRoot.setAttribute('viewBox', vbValue2);
        } else {
            svgRoot.setAttribute('viewBox', vbValue3);
        }
    }).resize(); // Cause an initial widow.resize to occur
});





