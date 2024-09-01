//слайдер фоновых изображений первой секции
let content = document.querySelector('.first__section');

let counter = 0;

setInterval(function () {
        let imgs = ['bg-image-1.jpg', 'bg-image-2.jpg', 'bg-image-3.jpg', 'bg-image-4.jpg'];

        content.style.backgroundImage = "url(images/" + imgs[counter] + ")";

        counter++;

        if (counter > imgs.length - 1) {
            counter = 0;
        }
    },
    4000);

//слайдер второй секции

function func(count, slider, imageSlider, right, left) {
    let blockSlider = document.querySelector(slider);
    let images = blockSlider.querySelectorAll(imageSlider);

    images[count].classList.add('active');

    let slideLeft = document.querySelector(left);
    let slideRight = document.querySelector(right);

    (function handSlider() {
        slideRight.addEventListener('click', function (event) {
            images[count].classList.toggle('active');
            count++;
            console.log(count);
            for (let slide of images) {
                if (count > 0 && count <= images.length - 1) {
                    images[count].classList.add('active');
                    console.log(count);
                } else {
                    count = 0;
                    images[count].classList.add('active');
                }
            }
            console.log(count);
            event.preventDefault();
        });

        slideLeft.addEventListener('click', function (event) {
            images[count].classList.toggle('active');
            count--;
            console.log(count);
            for (let slide of images) {
                if (count >= 0 && count <= images.length - 1) {
                    images[count].classList.add('active');
                    console.log(count);
                } else {
                    count = images.length - 1;
                    images[count].classList.add('active');
                }
            }
            console.log(count);
            event.preventDefault();
        });
    })();
}

func(0, '#slider', '.image-slider', '#right', '#left');

let parent = document.querySelector('#parent');
let links = document.querySelectorAll('.tab .link a');
console.log(links);

for (let link of links) {
    link.addEventListener('click', function (event) {
        let tabActive = parent.querySelector('.tab.active');

        if (tabActive) {
            tabActive.classList.remove('active');
        }

        let tab = link.closest('.tab');

        if (tab !== tabActive) {
            tab.classList.add('active');
        }

        event.preventDefault();
    });
}

let section = document.querySelector('.section');
let height = document.documentElement.clientHeight;
let y = document.documentElement.scrollTop;
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

/*window.addEventListener('scroll', function() {
    window.scrollBy(0, height);
    console.log(scrollHeight);
    //document.documentElement.scrollTop = height;
});

console.log(scrollHeight);*/

/*window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, height);
    }
    console.log(window.pageYOffset);
});*/

let counter2 = 0;
document.addEventListener('wheel', function (e) {
    let direction = e.deltaY;
    console.log(direction);

    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    h = document.documentElement.clientHeight;

    let sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);

    let second = document.querySelector('#second__section');



    console.log(y);
    if (direction === 100) {
        window.scrollBy(0, h);
        counter2++;
        console.log(counter2);
    } else if (direction === -100) {
        window.scrollBy(0, -h);
        counter2--;
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.nav-menu__list-item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
});

