import $ from 'chirashi';
import 'gsap';

(() => {
    var Home = {
        init: () => {
            console.log('Home init');

            Home.setStagger();
        },

        events: () => {
            document.addEventListener('mousemove', this.setAnimatedBox(event));
        },

        setAnimatedBox: (event) => {
            let animatedBox = document.querySelector('.animated-box');

            requestAnimationFrame(() => {
                let container = $.getSelector('.container-animatedbox'),
                    offsetX   = event.pageX - container.offsetLeft,
                    offsetY   = event.pageY - container.offsetTop;

                container.style.webkitPerspectiveOrigin = (100 * offsetX / container.offsetWidth) + '% ' + (100 * offsetY / container.offsetHeight) + '%';
            });
        },

        setStagger: () => {
            TweenMax.staggerFrom('.item', 2, {
                scale:   0.5,
                opacity: 0,
                delay:   0.5,
                ease:    Elastic.easeOut,
                force3D: true
            }, 0.2);

            /*$.on('.item', 'click', function(){
                TweenMax.staggerTo('.item', 0.5, {
                    opacity: 0,
                    y:       -100,
                    ease:    Back.easeIn
                }, 0.1);
            });*/
        }
    };

    $.ready(() => {
        Home.init();
    });

    module.exports = Home;
})();
