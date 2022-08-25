// Mobile navbar toggle

const toggle_button = document.getElementById("toggle-button")
const nav_link = document.getElementsByClassName("navbar-links")[0]

toggle_button.addEventListener('click',()=>{
    nav_link.classList.toggle('active')
})

// pop-up function

const pop_window = document.getElementsByClassName('pop_up')[0]

const pop_button = document.getElementById('close_pop_up')

pop_button.addEventListener('click',()=>{
	pop_window.style.display = 'none'
})