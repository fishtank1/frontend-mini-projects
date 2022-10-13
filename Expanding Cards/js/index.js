const backgroundImagesArray = [
    'https://images.unsplash.com/photo-1658163724548-29ef00812a54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1641361784653-73767ccfdf60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    'https://images.unsplash.com/photo-1644005498439-d76f962044ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1661565883728-c29018265f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1661749232278-3c8380532c07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80'
]

const cards = document.querySelectorAll('.card');
var prev;

function handleWall(data) {
    (prev != undefined) ? (prev.classList.remove('active')) : (prev = undefined)
    data.classList.add('active');
    data.setAttribute('isActive', true);
    prev = data;
    return;
}

for(let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = `url(${backgroundImagesArray[i]})`;
    if(i == 0) {
        prev = cards[i];
        cards[i].classList.add('active');
        cards[i].setAttribute('isActive', true);
    }
    cards[i].addEventListener('click', () => {
        handleWall(cards[i])
    });
}

