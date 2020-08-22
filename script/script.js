document.querySelector("#menu").addEventListener("click", menuOpen);
function menuOpen(e) {
    e.preventDefault();
    let classList = document.querySelector("#myTopnav");

    if (classList.className === "topnav") {
        classList.classList.add("responsive")
    } else {
        classList.className = "topnav";
    }

}