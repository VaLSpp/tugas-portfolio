var out = console.log.bind(document)

const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navList = document.querySelector(".nav-list")

mobileMenuBtn.addEventListener("click", function(){
    navList.classList.toggle("active")
})

document.addEventListener("click", function(e){
    if (!mobileMenuBtn.contains(e.target) && !navList.contains(e.target)){
        navList.classList.remove("active")
    }
})

document.addEventListener("scroll", function(){
    navList.classList.remove("active")
})