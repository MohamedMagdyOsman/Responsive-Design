let landingArrow = document.querySelector('.landing .container > i');

landingArrow.addEventListener('click', () => {
    window.scrollTo(0, 700);
});


let articlesCards = Array.from(
    document.querySelectorAll('.articles .container .cards .card')
);
let articles = document.querySelectorAll('.articles')[0];


let testimonials = document.querySelector('.testimonials .container .rates');


let bars = Array.from(
    document.querySelectorAll('.skills .content .topics .skill .bar .progress')
);
let skills = document.querySelector('.skills .content .topics');


let ribbon = document.querySelector('.plans .container .plan .ribbon');

let nums = Array.from(
    document.querySelectorAll('.stats .container .cards .card .number')
);
let stats = document.querySelector('.stats');
let started = false;


let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;

    if (window.scrollY >= articles.offsetTop) {
        articlesCards.forEach(card => {
            card.style.opacity = '1';
        });
    }

    if (window.scrollY >= testimonials.offsetTop - 200) {
        testimonials.style.transform = 'translateY(0)';
        testimonials.style.opacity = '1';
    }

    if (window.scrollY >= skills.offsetTop - 200) {
        bars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }

    if (window.scrollY >= stats.offsetTop - 200) {
        if (!started) {
          nums.forEach((num) => startCount(num));
        }
        started = true;
    }
});

// function
function startCount(el) {
    let goal = el.dataset.target;

    let count = setInterval(() => {
      el.textContent++;

      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 2000 / goal);
}