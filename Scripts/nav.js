let open = document.querySelector('.active');

open.addEventListener('click', () => {
    tl.play();
})

close.addEventListener('click', () => {
    tl.reverse();
})