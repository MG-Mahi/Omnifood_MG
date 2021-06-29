const hamBurger = document.querySelector(".mobile-icon")
const icon = document.querySelector(".mobile-icon ion-icon")
const list = document.querySelector(".list")
const nav_links = document.querySelectorAll(".nav_items")

const mobileNav = e => {
    e.preventDefault()
    if (list.classList.contains("show")) {
        icon.setAttribute("name", "menu-outline")
        list.classList.remove("show")
    } else {
        icon.setAttribute("name", "close-outline")
        list.classList.add("show")
    }
}

hamBurger.addEventListener("click", mobileNav)
nav_links.forEach(e => {
    e.addEventListener("click", () => {
        list.classList.remove("show")
    })
})

// Intersection Observer
const navBar = document.querySelector(".nav_container")
const header = document.querySelector("header")

const headerOptions = {
    rootMargin: "-200px 0px 0px 0px"
}

const headerObserver = new IntersectionObserver((entries, headerObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navBar.classList.add("nav_scrolled")
        } else {
            navBar.classList.remove("nav_scrolled")
        }
    })
}, headerOptions)


headerObserver.observe(header)




// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({
    behavior: 'smooth'
});





// AOS 
AOS.init();


// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});