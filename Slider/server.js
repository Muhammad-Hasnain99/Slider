function togglehide(){
    let Button = document.querySelector(".cros-btn")
    let link = document.querySelector(".links-section")
    let Navbar = document.querySelector(".navbar")


    Navbar.style.display = `none`
    // if(link.style.display != `none`){
    // link.style.display = `none`;
    // Navbar.style.background = `none`;
    // }
    // else{
    // link.style.display = `block`;
    // Navbar.style.background = `white`;

    // }
    
}

function showsidebar(){
    let Navbar = document.querySelector(".navbar")
    let menuBtn = document.querySelector(".menu-btn")

    if(Navbar.style.display != `none`){
        Navbar.style.display = `none`;
        }
        else{
        Navbar.style.display = `block`;
        }
}