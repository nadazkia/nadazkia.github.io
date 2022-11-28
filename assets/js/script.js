const togglebutton = document.getElementsByClassName('burger')[0]
const navbarUl = document.querySelector('ul')

togglebutton.addEventListener('click', () => {
    navbarUl.classList.toggle('active')
    togglebutton.classList.toggle('active')
})

const aLi = document.querySelectorAll('a')
for (let a of aLi) {
    a.addEventListener('click', () => {
        navbarUl.classList.remove('active')
        togglebutton.classList.toggle('active')
    });
};