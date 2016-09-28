import $ from 'chirashi';
import 'gsap';

(() => {
    var Home = {
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

            var animatedBox = document.querySelector('.animated-box');

            document.addEventListener('mousemove', (event) => {
                requestAnimationFrame(() => {
                    console.log('raf');
                    var container = $.getSelector('.container-animatedbox');
                    var offsetX = event.pageX - container.offsetLeft;
                    var offsetY = event.pageY - container.offsetTop;

                    //animatedBox.style.transform = 'translate3d(0, 0, -'+event.pageX+'px) rotate('+event.pageX+'deg)';
                    container.style.webkitPerspectiveOrigin = (100 * offsetX / container.offsetWidth) + '% ' + (100 * offsetY / container.offsetHeight) + '%';
                    //animatedBox.style.transform = "translateX(${event.pageX}) translateY(${event.pageY})";
                });
            });

            console.log(animatedBox);
        }
    };

    $.ready(() => {
        Home.init();

        console.log('branch test modif');
    });

    module.exports = Home;
})();
