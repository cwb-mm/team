// nav bar script start from here!

    const header= document.querySelector("header");
    const hamburgerBtn= document.querySelector("#hamburger-btn");
    const closeMenuBtn= document.querySelector("#close-menu-btn");

    // toggle mobile menu on hamburger button click
    hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

    // close mobile menu on close button click
    closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// nav bar script end here!