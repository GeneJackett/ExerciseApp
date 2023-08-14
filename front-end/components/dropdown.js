//get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdowns => {
    const select = dropdowns.querySelector('.select');
    const caret = dropdowns.querySelector('.caret');
    const menu = dropdowns.querySelector('.menu');
    const options = dropdowns.querySelector('.menu li');
    const selected = dropdowns.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    options.forEach(option => {
        //add a click event to the option element
        option.addEventListener('click', () => {
            //change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            //add the clicked select styles to the selct element
            select.classList.remove('select-clicked');
            //add the rotate styles to the caret element            
            caret.classList.remove('caret-rotate');
            //add the open styles to the menu elements
            menu.classList.remove('menu-open');
            //remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active');
            });
            //add active class to clicked option element
            option.classList.add('active');
        });
    });
});