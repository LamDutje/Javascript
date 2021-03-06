let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";


        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";


        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }

}

function chBackcolor(color) {
    document.body.style.background = color;
}
/*
const attachEventToAlertButton = function() {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function() {
        alert("Hello World!");
    });
};

const toggleColor = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};

const attachEventToChangeColorButton = function() {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function() {
        toggleColor();
    });
};

attachEventToAlertButton();
attachEventToChangeColorButton();
*/