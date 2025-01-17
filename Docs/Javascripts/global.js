const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const responsiveNavbar = document.getElementById("responsiveNavbar")
const closeNav = document.getElementById("closeNav")
const openNav = document.getElementById("openNav")

openNav.addEventListener('click', () => {
    responsiveNavbar.style.width = "100%"
})
closeNav.addEventListener('click', () => {
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