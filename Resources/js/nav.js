const hamBurger = document.querySelector(".mobile-icon")
const list = document.querySelector(".list")

hamBurger.addEventListener("click", mobileNav)

const mobileNav = () => {
    hamBurger.classList.toggle("active")
    list.classList.toggle("active")
}