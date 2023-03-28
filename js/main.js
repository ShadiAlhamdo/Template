let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartitem.classList.remove("active");
};

let searchForm = document.querySelector(".header .search-form ");

let btnSearch = document.querySelector("#search-box");
btnSearch.onclick = () => {
    searchForm.classList.toggle("active");
    cartitem.classList.remove("active");
    navbar.classList.remove("active");
    
};


let cartitem = document.querySelector(".cart-items-container ");

document.querySelector("#cart-btn").onclick = () => {
    cartitem.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartitem.classList.remove("active");
}

//footer copyright
let footer = document.querySelector(".footer .credit");
let date = new Date();
let text = ` ${date.getFullYear()}`;

footer.appendChild(document.createTextNode(text));

