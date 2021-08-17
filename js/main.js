const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => { tabContent.classList.remove('active') })
        target.classList.add('active');
    })
});

const form = document.getElementById("myForm");


function handleForm(event) {
    let email = document.querySelector(".input");
    let errorMessage = document.querySelector(".error-text");
    let errorPanel = document.querySelector(".error");

    event.preventDefault();
    if (!email.value) {
        email.style.border = "3px solid hsl(0, 94%, 66%)";
        errorMessage.innerHTML = "Input field is empty...";
        errorPanel.style.display = "block";
        email.classList.add("error-icon");

    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style.border = "3px solid hsl(0, 94%, 66%)";
        errorMessage.innerHTML = "Whoops, make sure it's an email";
        errorPanel.style.display = "block";
        email.classList.add("error-icon");

    } else {
        errorPanel.style.display = "none";
        email.style.border = "none";
        email.classList.remove("error-icon");
    }
}
form.addEventListener('submit', handleForm);

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");

// On click
let active = false;
hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    console.log(active);
    active = !active;
    if (active == true) {
        menu.classList.add("menu-open");
        logo.style.visibility = "hidden";
    } else {
        menu.classList.remove("menu-open");
        logo.style.visibility = "visible";
    }
    // Do something else, like open/close menu
});