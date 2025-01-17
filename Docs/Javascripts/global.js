const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const responsiveNavbar = document.getElementById("responsiveNavbar")
const closeNav = document.getElementById("closeNav")
const openNav = document.getElementById("openNav")
const closeNavPricing = document.getElementById("closeNavPricing")

openNav.addEventListener('click', () => {
    responsiveNavbar.style.width = "100%"
})

closeNav.addEventListener('click', () => {
    responsiveNavbar.style.width = "0%"
})

closeNavPricing.addEventListener('click', () => {
    responsiveNavbar.style.width = "0%"
})

const openManageConsent = document.getElementById("openManageConsent")
const ManageConsent = document.getElementById("ManageConsent")
const closeManageConsent = document.getElementsByClassName("closeManageConsent")

openManageConsent.addEventListener('click', () => {
    ManageConsent.classList.remove("hidden")
    openManageConsent.classList.add("hidden")
})

Array.from(closeManageConsent).forEach(button => {
    button.addEventListener('click', () => {
        ManageConsent.classList.add("hidden");
        openManageConsent.classList.remove("hidden");
    });
});

const telegram = document.getElementById("telegram")
const whatsapp = document.getElementById("whatsapp")
const message = document.getElementById("message")
const messagei = document.getElementById("messagei")
const needHelp = document.getElementById("needHelp")

let isToggled = false;

message.addEventListener("click", () => {
    if (isToggled) {
        whatsapp.style.bottom = "0";
        telegram.style.bottom = "0";
        messagei.classList.remove("fa-x")
        messagei.classList.add("fa-comment-dots")
        needHelp.innerText = "Need Help"
    } else {
        whatsapp.style.bottom = "4rem";
        telegram.style.bottom = "8rem";
        messagei.classList.add("fa-x")
        messagei.classList.remove("fa-comment-dots")
        needHelp.innerText = "Hide"
    }
    isToggled = !isToggled;
});