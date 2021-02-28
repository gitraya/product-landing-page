function navbarButton() {
    const button = document.querySelector('#navbar-mobile');
    const nav = button.parentElement;
    const navContainer = document.querySelector('.nav-stable');

    button.addEventListener('click', () => {
        if (nav.classList.value === 'mobile-nav') {
            nav.classList.remove('mobile-nav');
            navContainer.classList.remove('mobile-nav');
        } else {
            nav.classList.add('mobile-nav');
            navContainer.classList.add('mobile-nav');
        }
    })
}

function scrollToTop() {
    const button = document.querySelector('.top-button');
    const rootElement = document.documentElement;

    button.addEventListener('click', () => {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}

function switchProducts() {
    const foodsButton = document.querySelector('#foods-button');
    const fruitsButton = document.querySelector('#fruits-button');
    const foodsProducts = document.querySelector('.products-content.foods');
    const fruitsProducts = document.querySelector('.products-content.fruits');

    function switchProduct(onButton, offButton, show, hide) {
        const textColorOn = onButton.querySelector('h3');
        const textColorOff = offButton.querySelector('h3');
        const lineColorOn = textColorOn.querySelector('div');
        const lineColorOff = textColorOff.querySelector('div');

        onButton.addEventListener('click', () => {
            if (show.classList.value === 'hide') {
                hide.classList.add('hide');
                textColorOff.className = 'sub-heading-off';
                lineColorOff.className = 'line hide';

                show.classList.remove('hide');
                textColorOn.className = 'sub-heading-on';
                lineColorOn.className = 'line';
            } else {
                show.classList.remove('hide');
                textColorOn.className = 'sub-heading-on';
                lineColorOn.className = 'line';
                
                hide.classList.add('hide');
                textColorOff.className = 'sub-heading-off';
                lineColorOff.className = 'line hide';
            }
        })
    }

    switchProduct(foodsButton, fruitsButton, foodsProducts, fruitsProducts);
    switchProduct(fruitsButton, foodsButton, fruitsProducts, foodsProducts);
}

navbarButton();
scrollToTop();
switchProducts();