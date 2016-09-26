import $ from 'chirashi';
import 'gsap';

(() => {
    var Home = module.exports = {
        init: () => {
            console.log('Home init');

            TweenMax.staggerFrom('.item', 2, {
                scale:   0.5,
                opacity: 0,
                delay:   0.5,
                ease:    Elastic.easeOut,
                force3D: true
            }, 0.2);

            $.on('.item', 'click', function(){
                TweenMax.staggerTo('.item', 0.5, {
                    opacity: 0,
                    y:       -100,
                    ease:    Back.easeIn
                }, 0.1);
            });
        }
    };

    $.ready(() => {
        Home.init();

        console.log('branch test modif');
    });
})();
